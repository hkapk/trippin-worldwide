const router = require('express').Router();
const sequelize = require('../config/connection');
const { Location, Activity, Cuisine } = require('../models');

router.get('/locations', (req, res) => {
    Location.findAll({
        attributes: [
            'city',
            'country'
        ],
        include: [
            'posts'
        ]
    })
    .then(dbLocationData => {
        const locations = dbLocationData.map(location => location.get({ plain: true }));
        res.render('popular', { locations })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/activities', (req, res) => {
    Activity.findAll({
    attributes: [
            'name'
        ],
        include: [
            'posts'
        ]
    })
    .then(dbActivityData => {
        const activities = dbActivityData.map(activity => activity.get({ plain: true }));
        res.render('popular', { activities })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/cuisine', (req, res) => {
    Cuisine.findAll({
    attributes: [
            'name'
        ],
        include: [
            'posts'
        ]
    })
    .then(dbCuisineData => {
        const cuisine = dbCuisineData.map(cuisine => cuisine.get({ plain: true }));
        res.render('popular', { cuisine })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// router.get('/', (req, res) => {
//     sequelize.query(
//         '(SELECT COUNT(DISTINCT city) FROM location)'
//     )
//     .then(dbLocationData => res.json(dbLocationData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;