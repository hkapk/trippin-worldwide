const router = require('express').Router();
<<<<<<< HEAD
const { Sequelize } = require('sequelize/dist');
=======
const sequelize = require('../../config/connection');
>>>>>>> 1b0b356f35ce1ae2527a9bca0f29222f157a8f62
const { Location } = require('../../models');

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

module.exports = router;