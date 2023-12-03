var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  if (req.session.loggedUser.idUser === 1) {
    res.render("mainPanel/calendarPage", { navLocation: "admin" });
  } else {
    res.render("mainPanel/calendarPage", { navLocation: "calendar" });
  }
});

module.exports = router;