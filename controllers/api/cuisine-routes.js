const router = require('express').Router();
const { Cuisine } = require('../../models');

router.get('/', (req, res) => {
    Cuisine.findAll({
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