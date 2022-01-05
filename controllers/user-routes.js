const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment} = require('../models');

router.get('/', (req, res) => {
    User.findAll({
      // attributes: { exclude: ['password'] },
      attributes:[
        'id',
        'first_name',
        'last_name',
        'email',
        'created_at',
        'updated_at'
      ],
      include: [
        {
          model: Post,
          attributes: ['title', 'id', 'end_date']
        },
        {
          model: Comment ,
          attributes: ['comment_text', 'id'],
          include : {
            model: Post,
            attributes: ['title', 'id']
  
          }
        }
      ]
    })
    .then(dbUserData => {
        const users = dbUserData.map(user => user.get({ plain: true }));
        res.render('users', { users,
            loggedIn: req.session.loggedIn })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
  
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    attributes:[
      'id',
      'first_name',
      'last_name',
      'email',
      'created_at',
      'updated_at'
    ],
    include: [
      {
        model: Post,
        attributes: ['title', 'id', 'created_at', 'end_date']
      },
      {
        model: Comment ,
        attributes: ['comment_text', 'id', 'created_at'],
        include : {
          model: Post,
          attributes: ['title', 'id']

        }
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }

    // serialize the data
    const user = dbUserData.get({ plain: true });

    // pass data to template
    res.render('single-user',
      {
        user,
        loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;