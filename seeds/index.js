const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedLocations = require('./location-seeds');
const seedCountryCodes = require('./country-codes-seeds');
const seedPostLocations = require('./post-location-seeds');
const seedActivities = require('./activity-seeds');
const seedPostActivities = require('./post-activity-seeds');
const seedCuisine = require('./cuisine-seeds');
const seedPostCuisine = require('./post-cuisine-seeds');
const seedComments = require('./comment-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DATABASE SYNCED');

    await seedUsers();
    console.log('USERS SEEDED');

    await seedPosts();
    console.log('POSTS SEEDED');

    await seedLocations();
    console.log('LOCATIONS SEEDED');

    await seedCountryCodes();
    console.log('COUNTRY CODES SEEDED');

    await seedPostLocations();
    console.log('POST-LOCATIONS SEEDED');

    await seedActivities();
    console.log('ACTIVITIES SEEDED');

    await seedPostActivities();
    console.log('POST-ACTIVITIES SEEDED');

    await seedCuisine();
    console.log('CUISINE SEEDED');

    await seedPostCuisine();
    console.log('POST-CUISINE SEEDED');

    await seedComments();
    console.log('COMMENTS SEEDED');

    process.exit(0);
};

seedAll();