const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location } = require('../../models');

const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Location.findAll({
        attributes: [
            'city',
            'country',
            [sequelize.literal('(SELECT COUNT(location_id) FROM post_location WHERE location_id=location.id)'), 'count']
        ],
        include: [
            'posts'
        ]
    })
        .then(dbLocationData => res.json(dbLocationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Location.findOne({
        where: {
            id: req.params.id
        },
        include: [
            'posts'
        ]
    })
        .then(dbLocationData => res.json(dbLocationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Location.create({
        city: req.body.city,
        country: req.body.country
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;