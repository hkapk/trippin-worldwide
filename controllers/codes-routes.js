const router = require('express').Router();
const sequelize = require('../config/connection');
const { Code } = require('../models');

router.get('/codes', (req, res) => {
  Code.findAll({
    attributes: [
      'country_code_name',
      'country_code'
    ],
  })
    .then(dbCountryCodeData => {
      const codes = dbCountryCodeData.map(code => code.get({ plain: true }));
      res.render('code', { codes })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Code.findOne({
    where: {
      id: req.params.id
    },
    include: [
      'posts'
    ]
  })
    .then(dbCountryCodeData => res.json(dbCountryCodeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;