var express = require("express");
var router = express.Router();
const adminController = require("../../controllers/mainPageControllers/adminController");

router.get("/", adminController.home);

router.post("/", adminController.createDesk);

module.exports = router;
