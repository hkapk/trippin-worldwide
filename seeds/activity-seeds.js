const { Activity } = require('../models');

const activityData = [
    {
        name: 'Sightseeing'
    },
    {
        name: 'Shopping'
    },
    {
        name: 'Guided Tours'
    },
    {
        name: 'Museums'
    },
    {
        name: 'Hiking'
    },
    {
        name: 'Swimming'
    },
    {
        name: 'Boating'
    },
    {
        name: 'Wineries'
    }
]

const seedActivities = () => Activity.bulkCreate(activityData);

module.exports = seedActivities;