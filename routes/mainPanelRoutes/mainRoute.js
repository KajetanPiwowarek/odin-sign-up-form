var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  if (req.session.loggedUser.idUser === 1) {
    res.render("mainPanel/mainPage", {  navLocation: "admin" });
  } else {
    res.render("mainPanel/mainPage" , {  navLocation: "home" });
  }
});

module.exports = router;