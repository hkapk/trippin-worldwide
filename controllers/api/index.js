const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const locationRoutes = require('./location-routes');
const activityRoutes = require('./activity-routes');
const cuisineRoutes = require('./cuisine-routes');
const metricRoutes = require('./metric-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/locations', locationRoutes);
router.use('/activities', activityRoutes);
router.use('/cuisine', cuisineRoutes);
router.use('/metrics', metricRoutes);

module.exports = router;