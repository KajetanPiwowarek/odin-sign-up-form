var express = require("express");
var router = express.Router();
const adminController = require("../../controllers/mainPageControllers/adminController");

router.get("/", function (req, res, next) {
  res.render("mainPanel/adminPage", { info: "", navLocation: "admin" });
});

router.post("/", adminController.createDesk);

module.exports = router;
