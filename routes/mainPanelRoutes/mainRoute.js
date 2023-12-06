var express = require('express');
var router = express.Router();
const mainController = require("../../controllers/mainPageControllers/mainController");

/* GET login page. */
router.get("/", mainController.home);
router.get("/cancel/:idBooking", mainController.cancelBooking);

module.exports = router;