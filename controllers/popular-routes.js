const router = require('express').Router();
const sequelize = require('../config/connection');
const { Location, Activity, Cuisine } = require('../models');

router.get('/', (req, res) => {
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
        res.render('popular', { locations });
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