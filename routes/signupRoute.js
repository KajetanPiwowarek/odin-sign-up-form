var express = require('express');
var router = express.Router();
const signupController = require('../controllers/signupController');

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', { navLocation: 'signup' });
});

router.post('/signup', signupController.signup);

module.exports = router;