const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

const { Post, Comment, User, Location, PostLocation } = require('../../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'description',
      'content',
      'start_date',
      'end_date',
      'photo_url',
    ],
      order: [['end_date', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['first_name', 'last_name']
      },
      { 
        model: Comment,
        attributes: ['id','comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['first_name', 'last_name']
        }
      },
      'locations',
      'activities',
      'cuisine',
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'description',
      'content',
      'start_date',
      'end_date',
      'photo_url',
    ],
    include: [
      {
        model: User,
        attributes: ['first_name', 'last_name']
      },
      'locations',
      'activities',
      'cuisine',
      { 
        model: Comment,
        attributes: ['id','comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['first_name', 'last_name']
        }
      },
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Location.findOne({
    attributes: [ 'id' ],
    where: {
      city: req.body.city,
      country: req.body.country
    }
  })
  .then((foundLocation) => {
    if (!foundLocation) {
      Post.create({
        user_id: req.session.user_id,
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        photo_url: req.body.photo_url,
        locations: [ 
          { city: req.body.city, country: req.body.country }
        ],
        activities: [
          { name: req.body.activity }
        ],
        cuisine: [
          { name: req.body.cuisine }
        ]
    },
      {
        include: [ 'locations', 'activities', 'cuisine' ]
      })
    } else if (foundLocation) {
      Post.create({
        user_id: req.session.user_id,
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        photo_url: req.body.photo_url,
        activities: [
          { name: req.body.activity }
        ],
        cuisine: [
          { name: req.body.cuisine }
        ]
      },
      {
        include: [ 'activities', 'cuisine' ]
      })
      .then((post) => {
        const pair = [{
          post_id: post.id,
          location_id: foundLocation.id
        }]
        PostLocation.bulkCreate(pair);
      })
    }
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      photo_url: req.body.photo_url,
    }, 
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
