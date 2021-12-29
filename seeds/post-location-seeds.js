const { PostLocation } = require('../models');

const postLocationData = [
    {
        post_id: 1,
        location_id: 1
    },
    {
        post_id: 2,
        location_id: 2
    },
    {
        post_id: 3,
        location_id: 3
    },
    {
        post_id: 4,
        location_id: 4
    },
    {
        post_id: 5,
        location_id: 5
    },
    {
        post_id: 6,
        location_id: 6
    },
    {
        post_id: 7,
        location_id: 7
    },
    {
        post_id: 8,
        location_id: 8
    },
    {
        post_id: 9,
        location_id: 9
    },
    {
        post_id: 10,
        location_id: 10
    },
    {
        post_id: 10,
        location_id: 11
    },
    {
        post_id: 10,
        location_id: 12
    },
    {
        post_id: 11,
        location_id: 10
    },
    {
        post_id: 12,
        location_id: 7
    },
    {
        post_id: 13,
        location_id: 10
    }
];

const seedPostLocations = () => PostLocation.bulkCreate(postLocationData);

module.exports = seedPostLocations;