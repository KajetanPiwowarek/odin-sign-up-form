const UserRepository = require("../repository/sequelize/UserRepository");

exports.home = (req, res, next) => {
  if (req.session.loggedUser) {
    res.render("index", { navLocation: "home" });
  } else {
    res.render("index", { navLocation: "main" });
  }
};
