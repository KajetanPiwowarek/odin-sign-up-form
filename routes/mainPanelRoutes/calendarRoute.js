var express = require('express');
var router = express.Router();
const calendarController = require("../../controllers/mainPageControllers/calendarController");

/* GET login page. */
router.get("/", calendarController.showCalendar);

module.exports = router;
