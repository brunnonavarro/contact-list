var express = require('express');
var router = express.Router();
var model = require('../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  model.Contacts.findAll({})
  .then( contacts => res.json({
    error: false,
    data:contacts
  }))
  .catch( error => res.json({
    error: true,
    data: [],
    error: error
  }))
});

module.exports = router;
