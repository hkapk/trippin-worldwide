const { User } = require('../models');

const userData = [
    {
        first_name: 'Kristin',
        last_name: 'Gaito',
        email: 'kngurley25@gmail.com',
        password: 'password'
    },
    {
        first_name: 'Christine',
        last_name: 'Baxter',
        email: 'christine.d.baxter@live.com',
        password: 'password'
    },
    {
        first_name: 'Hank',
        last_name: 'Kapka',
        email: 'hankkapka@gmail.com',
        password: 'password'
    },
    {
        first_name: 'Raman',
        last_name: 'TV',
        email: 'ramantv@outlook.com',
        password: 'password'
    },
    {
        first_name: 'Sam',
        last_name: 'Davenport',
        email: 'samueldavenport@att.net',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;