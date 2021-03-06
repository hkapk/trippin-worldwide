const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const popularRoutes = require('./popular-routes.js');
const metricRoutes = require('./metric-routes.js');
const userRoutes = require('./user-routes');
const photoRoutes = require('./photo-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/popular', popularRoutes);
router.use('/metric', metricRoutes);
router.use('/users', userRoutes);
router.use('/photos', photoRoutes);

module.exports = router;