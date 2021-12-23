const { PostCuisine } = require('../models');

const postCuisineData = [
    {
        post_id: 3,
        cuisine_id: 1
    },
    {
        post_id: 3,
        cuisine_id: 2
    },
    {
        post_id: 6,
        cuisine_id: 3
    },
    {
        post_id: 9,
        cuisine_id: 4
    },
    {
        post_id: 10,
        cuisine_id: 5
    },
    {
        post_id: 10,
        cuisine_id: 6
    },
    {
        post_id: 11,
        cuisine_id: 6
    },
]

const seedPostCuisine = () => PostCuisine.bulkCreate(postCuisineData);

module.exports = seedPostCuisine;