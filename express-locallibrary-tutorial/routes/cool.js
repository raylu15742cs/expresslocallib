var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('your so cool, but I am cooler');
});

module.exports = router;
