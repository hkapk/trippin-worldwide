const { Location } = require('../models');

const locationData = [
    {
        city: 'New York City',
        country: 'United States of America'
    },
    {
        city: 'London',
        country: 'England'
    },
    {
        city: 'Paris',
        country: 'France'
    },
    {
        city: 'Sydney',
        country: 'Australia'
    },
    {
        city: 'Cancun',
        country: 'Mexico'
    }
]

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;