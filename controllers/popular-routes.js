const router = require('express').Router();
const sequelize = require('../config/connection');
const { Location, Activity, Cuisine } = require('../models');

router.get('/locations', (req, res) => {
    Location.findAll({
        attributes: [
            'city',
            'country',
            [sequelize.literal('(SELECT COUNT(location_id) FROM post_location WHERE location_id=location.id)'), 'count']
        ],
        include: [
            'posts'
        ],
        order: [[sequelize.literal('count DESC')]]
    })
    .then(dbLocationData => {
        const locations = dbLocationData.map(location => location.get({ plain: true }));
        res.render('popular', { locations,
            loggedIn: req.session.loggedIn })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/activities', (req, res) => {
    Activity.findAll({
    attributes: [
            'name',
            [sequelize.literal('(SELECT COUNT(activity_id) FROM post_activity WHERE activity_id=activity.id)'), 'count']
        ],
        include: [
            'posts'
        ],
        order: [[sequelize.literal('count DESC')]]
    })
    .then(dbActivityData => {
        const activities = dbActivityData.map(activity => activity.get({ plain: true }));
        res.render('popular', { activities, 
            loggedIn: req.session.loggedIn})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/cuisine', (req, res) => {
    Cuisine.findAll({
    attributes: [
            'name',
            [sequelize.literal('(SELECT COUNT(cuisine_id) FROM post_cuisine WHERE cuisine_id=cuisine.id)'), 'count']
        ],
        include: [
            'posts'
        ],
        order: [[sequelize.literal('count DESC')]]
    })
    .then(dbCuisineData => {
        const cuisine = dbCuisineData.map(cuisine => cuisine.get({ plain: true }));
        res.render('popular', { cuisine,
            loggedIn: req.session.loggedIn})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;