const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
//attributes will go here: 

//
    })
      .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts, loggedIn: true });
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
       // attributes will go here: 

       //
      })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
    
          // serialize the data
          const post = dbPostData.get({ plain: true });
    
          // pass data to template
          res.render('single-blog', 
          { post
           });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });


module.exports = router;