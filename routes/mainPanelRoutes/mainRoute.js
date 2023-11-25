var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('mainPanel/mainPage', { navLocation: 'home' });
});

module.exports = router;