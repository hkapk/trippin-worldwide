const { Location } = require('../models');

const locationData = [
    {
        city: 'New York City',
        country: 'United States of America',
        countryCode: 'US'
    },
    {
        city: 'London',
        country: 'England',
        countryCode: 'GB'
    },
    {
        city: 'Paris',
        country: 'France',
        countryCode: 'FR'
    },
    {
        city: 'Sydney',
        country: 'Australia',
        countryCode: 'AU'
    },
    {
        city: 'Cancun',
        country: 'Mexico',
        countryCode: 'MX'
    },
    {
        city: 'Tokyo',
        country: 'Japan',
        countryCode: 'JP'
    },
    {
        city: 'San Francisco',
        country: 'United States of America',
        countryCode: 'US'
    },
    {
        city: 'Barcelona',
        country: 'Spain',
        countryCode: 'ES'
    },
    {
        city: 'Ocho Rios',
        country: 'Jamaica',
        countryCode: 'JM'
    },
    {
        city: 'Rome',
        country: 'Italy',
        countryCode: 'IT'
    },
    {
        city: 'Venice',
        country: 'Italy',
        countryCode: 'IT'
    },
    {
        city: 'Florence',
        country: 'Italy',
        countryCode: 'IT'
    },
]

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;