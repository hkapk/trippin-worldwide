const router = require('express').Router();
const { Activity } = require('../../models');

router.get('/', (req, res) => {
    Activity.findAll({
        include: [
            'posts'
        ],
        order: [['name', 'ASC']],
    })
    .then(dbActivityData => res.json(dbActivityData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Activity.findOne({
        where: {
            id: req.params.id
        },
        include: [
            'posts'
        ]
    })
    .then(dbActivityData => res.json(dbActivityData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;