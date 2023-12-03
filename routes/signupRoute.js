var express = require('express');
var router = express.Router();
const signupController = require('../controllers/signupController');

/* GET signup page. */
router.get('/', signupController.home);

router.post('/', signupController.signup);

module.exports = router;