const router = require('express').Router();
const { Sequelize } = require('sequelize/dist');
const { Location } = require('../../models');

router.get('/', (req, res) => {
    Location.findAll({
        order: [['country', 'ASC']],
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