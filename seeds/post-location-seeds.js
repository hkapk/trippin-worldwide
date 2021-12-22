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
        post_id: 2,
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
        location_id: 1
    }
];

const seedPostLocations = () => PostLocation.bulkCreate(postLocationData);

module.exports = seedPostLocations;