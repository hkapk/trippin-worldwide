const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedLocations = require('./location-seeds');
const seedPostLocations = require('./post-location-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DATABASE SYNCED');
    await seedUsers();
    console.log('USERS SEEDED');
    await seedPosts();
    console.log('POSTS SEEDED');
    await seedLocations();
    console.log('LOCATIONS SEEDED');
    await seedPostLocations();
    console.log('POST LOCATIONS SEEDED');

    process.exit(0);
};

// seedAll();