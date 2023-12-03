const DeskRepository = require("../../repository/sequelize/DeskRepository");

exports.home = (req, res, next) => {
  if (req.session.loggedUser.idUser === 1) {
    res.render("mainPanel/adminPage", { info: "", navLocation: "admin" });
  } else {
    res.redirect("/home");
  }
};

exports.createDesk = (req, res, next) => {
  const desk = { ...req.body };
  DeskRepository.createDesk(desk)
    .then((result) => {
      res.render("mainPanel/adminPage", {
        info: "Desk added successfully",
        navLocation: "admin",
      });
    })
    .catch((err) => {
      console.log(err.errors);
      res.render("mainPanel/adminPage", {
        info: "Failed to add Desk",
        navLocation: "admin",
      });
    });
};
