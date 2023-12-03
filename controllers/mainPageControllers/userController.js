const UserRepository = require("../../repository/sequelize/UserRepository");

exports.userData = (req, res, next) => {
  if (req.session.loggedUser.idUser === 1) {
    const user = req.session.loggedUser;
    res.render("mainPanel/userPage", {
      user: user,
      navLocation: "admin",
    });
  } else {
    const user = req.session.loggedUser;
    res.render("mainPanel/userPage", {
      user: user,
      navLocation: "user",
    });
  }
};
