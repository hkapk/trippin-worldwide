const { PostActivity } = require('../models');

const postActivityData = [
    {
        post_id: 1,
        activity_id: 1
    },
    {
        post_id: 1,
        activity_id: 2
    },
    {
        post_id: 2,
        activity_id: 3
    },
    {
        post_id: 3,
        activity_id: 1
    },
    {
        post_id: 3,
        activity_id: 2
    },
    {
        post_id: 4,
        activity_id: 3
    },
    {
        post_id: 4,
        activity_id: 4
    },
    {
        post_id: 4,
        activity_id: 7
    },
    {
        post_id: 5,
        activity_id: 6
    },
    {
        post_id: 6,
        activity_id: 1
    },
    {
        post_id: 6,
        activity_id: 4
    },
    {
        post_id: 7,
        activity_id: 5
    },
    {
        post_id: 8,
        activity_id: 4
    },
    {
        post_id: 8,
        activity_id: 7
    },
    {
        post_id: 9,
        activity_id: 7
    },
    {
        post_id: 10,
        activity_id: 1
    },
    {
        post_id: 10,
        activity_id: 3
    },
    {
        post_id: 10,
        activity_id: 4
    },
    {
        post_id: 11,
        activity_id: 1
    },
    {
        post_id: 11,
        activity_id: 2
    },
    {
        post_id: 12,
        activity_id: 8
    },
    {
        post_id: 13,
        activity_id: 1
    },
    {
        post_id: 13,
        activity_id: 2
    },
    {
        post_id: 13,
        activity_id: 8
    }
]

const seedPostActivities = () => PostActivity.bulkCreate(postActivityData);

module.exports = seedPostActivities;