var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

/* GET login page. */
router.get('/', loginController.home);

router.post('/', loginController.login);

module.exports = router;