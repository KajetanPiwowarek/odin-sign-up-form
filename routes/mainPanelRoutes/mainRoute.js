var express = require('express');
var router = express.Router();
const mainController = require("../../controllers/mainPageControllers/mainController");

/* GET login page. */
router.get("/", mainController.home);

module.exports = router;