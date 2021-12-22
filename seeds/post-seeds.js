const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        title: "xxx",
        description: "xxx",
        start_date: 2021-05-01,
        end_date: 2021-05-07
    },
    {
        user_id: 2,
        title: "xxx",
        description: "xxx",
        start_date: 2021-05-01,
        end_date: 2021-05-07
    },
    {
        user_id: 3,
        title: "xxx",
        description: "xxx",
        start_date: 2021-05-01,
        end_date: 2021-05-07
    },
    {
        user_id: 4,
        title: "xxx",
        description: "xxx",
        start_date: 2021-05-01,
        end_date: 2021-05-07
    },
    {
        user_id: 5,
        title: "xxx",
        description: "xxx",
        start_date: 2021-05-01,
        end_date: 2021-05-07
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;