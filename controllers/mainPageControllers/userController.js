const UserRepository = require("../../repository/sequelize/UserRepository");

exports.userData = (req, res, next) => {
  const user = req.session.loggedUser;
  res.render("mainPanel/userPage", {
    user: user,
    navLocation: "user",
  });
};
