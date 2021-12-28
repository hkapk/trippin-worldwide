const { Cuisine } = require('../models');

const cuisineData = [
    {
        name: 'Escargot'
    },
    {
        name: 'Steak-frites'
    },
    {
        name: 'Onigiri'
    },
    {
        name: 'Jerk chicken'
    },
    {
        name: 'Risotto Alla Milanese'
    },
    {
        name: 'Polenta'
    },
    {
        name: 'Pizza'
    }
]

const seedCuisine = () => Cuisine.bulkCreate(cuisineData);

module.exports = seedCuisine;