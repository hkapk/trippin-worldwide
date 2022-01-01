const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment} = require('../models');

router.get('/users', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] },
      attributes:[
        'id',
        'first_name',
        'last_name',
        'email',
        'createdAt',
        'updatedAt'
      ],
      include: [
        {
          model: Post,
          attributes: ['title']
        },
        {
          model: Comment ,
          attributes: ['comment_text'],
          include : {
            model: Post,
            attributes: ['title']
  
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
  
router.get('users/:id', (req, res) => {
    User.findOne({
      where: {
        id: req.params.id
      },
      attributes: { exclude: ['password'] },
      attributes:[
        'id',
        'first_name',
        'last_name',
        'email',
        'createdAt',
        'updatedAt'
      ],
      include: [
        {
          model: Post,
          attributes: ['title']
        },
        {
          model: Comment ,
          attributes: ['comment_text'],
          include : {
            model: Post,
            attributes: ['title']
  
          }
        }
      ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
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