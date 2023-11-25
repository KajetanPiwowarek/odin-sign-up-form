var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { navLocation: 'login' });
});

router.post('/', loginController.login);

module.exports = router;