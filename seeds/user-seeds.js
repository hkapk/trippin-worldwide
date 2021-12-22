const { User } = require('../models');

const userData = [
    {
        first_name: 'Kristin',
        last_name: 'Gaito',
        username: 'kristin-gaito',
        email: 'kngurley25@gmail.com',
        password: 'password'
    },
    {
        first_name: 'Christine',
        last_name: 'Baxter',
        username: 'christine-baxter',
        email: 'christine.d.baxter@live.com',
        password: 'password'
    },
    {
        first_name: 'Hank',
        last_name: 'Kapka',
        username: 'hank-kapka',
        email: 'hankkapka@gmail.com',
        password: 'password'
    },
    {
        first_name: 'Raman',
        last_name: 'TV',
        username: 'raman-tv',
        email: 'ramantv@outlook.com',
        password: 'password'
    },
    {
        first_name: 'Sam',
        last_name: 'Davenport',
        username: 'sam-davenport',
        email: 'samueldavenport@att.net',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;