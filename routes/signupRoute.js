var express = require('express');
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', { navLocation: 'signup' });
});

router.post('/signup', signupController.signup);

module.exports = router;