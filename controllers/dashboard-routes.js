const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'user_id',
        'title',
        'description',
        'start_date',
        'end_date'
      ],
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name']
        },
        'locations',
        'activities',
        'cuisine'
      ]
    })
      .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
          id: req.params.id
        },
        attributes: [
          'id',
          'user_id',
          'title',
          'description',
          'start_date',
          'end_date'
        ],
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name']
          },
          'locations',
          'activities',
          'cuisine'
        ]
      })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
    
          // serialize the data
          const post = dbPostData.get({ plain: true });
    
          // pass data to template
          res.render('edit-blog', 
          { post
           });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

router.get('/create', withAuth, (req, res) => {
  res.render('create-blog');
});

module.exports = router;