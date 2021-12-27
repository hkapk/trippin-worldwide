const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Sounds like a great trip!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'How fun!',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Awesome trip!',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Cool trip!',
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: 'Looks like you had a great time!',
        user_id: 1,
        post_id: 5
    },
    {
        comment_text: 'I am traveling there soon!',
        user_id: 1,
        post_id: 6
    },
    {
        comment_text: 'My family is from there!',
        user_id: 1,
        post_id: 7
    },
    {
        comment_text: 'Sounds like an amazing trip!',
        user_id: 1,
        post_id: 8
    },
    {
        comment_text: 'Very cool!',
        user_id: 1,
        post_id: 9
    },
    {
        comment_text: 'I would love to travel here one day too!',
        user_id: 1,
        post_id: 10
    },
    {
        comment_text: 'So much fun!',
        user_id: 1,
        post_id: 11
    },
    {
        comment_text: 'Will have to go back some day!',
        user_id: 1,
        post_id: 12
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;