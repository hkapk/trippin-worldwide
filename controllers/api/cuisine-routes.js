const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Cuisine } = require('../../models');

router.get('/', (req, res) => {
    Cuisine.findAll({
        attributes: [
            'name',
            [sequelize.literal('(SELECT COUNT(cuisine_id) FROM post_cuisine WHERE cuisine_id=cuisine.id)'), 'count']
        ],
        include: [
            'posts'
        ],
        order: [['name', 'ASC']],
    })
    .then(dbCuisineData => res.json(dbCuisineData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Cuisine.findOne({
        where: {
            id: req.params.id
        },
        include: [
            'posts'
        ]
    })
    .then(dbCuisineData => res.json(dbCuisineData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;