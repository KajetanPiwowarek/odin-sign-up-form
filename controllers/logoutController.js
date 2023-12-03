const UserRepository = require("../repository/sequelize/UserRepository");

exports.logout = (req, res, next) => {
  const user = req.session.loggedUser;
  UserRepository.findById(user.idUser)
    .then((user) => {
      user.idSession = null;
      user.save();

      req.session.destroy((err) => {
        if (err) {
          console.error("Error destroying session:", err);
        }
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
