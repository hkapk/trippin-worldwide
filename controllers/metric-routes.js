const router = require('express').Router();
const sequelize = require('../config/connection');
const { Location } = require('../models');

router.get('/metrics', (req, res) => {
  Location.findAll({
    attributes: [
      'city',
      'country'
    ],
  })
    .then(dbMetricData => {
      const metrics = dbMetricData.map(metric => metric.get({ plain: true }));
      res.render('metric', { metrics })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;