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
    },
    {
        city: 'Tokyo',
        country: 'Japan'
    },
    {
        city: 'San Francisco',
        country: 'United States of America'
    },
    {
        city: 'Barcelona',
        country: 'Spain'
    },
    {
        city: 'Ocho Rios',
        country: 'Jamaica'
    },
    {
        city: 'Rome',
        country: 'Italy'
    },
    {
        city: 'Venice',
        country: 'Italy'
    },
    {
        city: 'Florence',
        country: 'Italy'
    },
]

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;