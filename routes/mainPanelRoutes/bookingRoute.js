var express = require('express');
var router = express.Router();
const bookingController = require("../../controllers/mainPageControllers/bookingController");

/* GET login page. */
router.get("/", bookingController.showBooking);

router.post("/", bookingController.bookDesk);

module.exports = router;