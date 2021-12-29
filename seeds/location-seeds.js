const { Location } = require('../models');

const locationData = [
    {
        city: 'New York City',
        country: 'United States of America',
        country_code: 'US'
    },
    {
        city: 'London',
        country: 'England',
        country_code: 'GB'
    },
    {
        city: 'Paris',
        country: 'France',
        country_code: 'FR'
    },
    {
        city: 'Sydney',
        country: 'Australia',
        country_code: 'AU'
    },
    {
        city: 'Cancun',
        country: 'Mexico',
        country_code: 'MX'
    },
    {
        city: 'Tokyo',
        country: 'Japan',
        country_code: 'JP'
    },
    {
        city: 'San Francisco',
        country: 'United States of America',
        country_code: 'US'
    },
    {
        city: 'Barcelona',
        country: 'Spain',
        country_code: 'ES'
    },
    {
        city: 'Ocho Rios',
        country: 'Jamaica',
        country_code: 'JM'
    },
    {
        city: 'Rome',
        country: 'Italy',
        country_code: 'IT'
    },
    {
        city: 'Venice',
        country: 'Italy',
        country_code: 'IT'
    },
    {
        city: 'Florence',
        country: 'Italy',
        country_code: 'IT'
    },
]

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;