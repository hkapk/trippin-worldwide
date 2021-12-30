const router = require('express').Router();
const sequelize = require('../config/connection');
//include models below
const { User, PostLocation, PostCuisine, PostActivity, Post, Location, Cuisine, Comment, Activity } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  // console.log(req.session);
  Post.findAll({
    //attributes to include go below  
    attributes: [
      'id',
      'user_id',
      'title',
      'description',
      'content',
      'start_date',
      'end_date',
    ],
    order: [['end_date', 'DESC']],
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
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage',
        {
          posts,
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

//signup route
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'user_id',
      'title',
      'description',
      'content',
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
      res.render('single-blog',
        {
          post,
          loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/popular', (req, res) => {
  res.render('popular');
});

router.get('/metrics', (req, res) => {
  res.render('metric');
});

module.exports = router;