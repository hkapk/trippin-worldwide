const router = require('express').Router();
const sequelize = require('../config/connection');
//include models below
//const { } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    console.log('req.session');
    Post.findAll({
//attributes to include go below      

    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
  
        res.render('homepage', 
        { posts,
        loggedIn: req.session.loggedIn
      }
      );
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});


router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
 //attributes will go here: 
 
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });
  
        // pass data to template
        res.render('single-post', 
        { post,
          loggedIn: req.session.loggedIn
         });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;