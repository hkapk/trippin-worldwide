const router = require('express').Router();
const sequelize = require('../config/connection');
const { Location, CountryCode } = require('../models');

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

router.get('/codes', (req, res) => {
  CountryCode.findAll({
    attributes: [
      'country_code_name',
      'country_code',
    ]
  })
    .then(dbCountryCodeData => {
      const codes = dbCountryCodeData.map(code => code.get({ plain: true }));
      res.render('metric', { codes })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;