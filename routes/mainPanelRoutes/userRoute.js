var express = require('express');
var router = express.Router();
const userController = require('../../controllers/mainPageControllers/userController');

router.get('/', userController.userData);

module.exports = router;