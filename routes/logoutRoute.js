var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.session.loggedUser = undefined;
  res.render('index', { navLocation: 'main' });
});

module.exports = router;