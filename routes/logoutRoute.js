var express = require('express');
var router = express.Router();

router.get('/logout', function(req, res, next) {
  req.session.loggedUser = undefined;
  res.render('/', { navLocation: 'main' });
});

module.exports = router;