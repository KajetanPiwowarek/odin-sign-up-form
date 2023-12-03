const UserRepository = require("../repository/sequelize/UserRepository");
const generateNewSessionId = require("../utils/sessionIdGenerator");

exports.signup = (req, res, next) => {
  const user = { ...req.body };
  UserRepository.findByEmail(user.email)
    .then(existingUser => {
      if (existingUser) {
        res.render("signup", {
          navLocation: "signup",
          info: "Email is already in use",
        });
      } else {
        UserRepository.createUser(user)
          .then(result => {
            const newSessionId = generateNewSessionId();

            user.idSession = newSessionId;
            user.save();

            req.session.loggedUser = user;
            req.session.idSession = newSessionId;

            res.redirect("/home");
          })
          .catch(err => {
            console.log(err.errors);
            res.render("signup", {
              navLocation: "signup",
              info: "Error has occured while creating User",
            });
          });
      }
    })
    .catch(err => {
      console.log(err);
      res.render("signup", {
        navLocation: "signup",
        info: "Error has occured while finding existing User",
      });
    });
};

exports.home = (req, res, next) => {
  if(req.session.loggedUser){
    const user = req.session.loggedUser;
  UserRepository.findById(user.idUser)
    .then((user) => {
      user.idSession = null;
      user.save();

      req.session.destroy((err) => {
        if (err) {
          console.error("Error destroying session:", err);
        }
        res.redirect("/signup");
      });
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    res.render('signup', { navLocation: 'signup', info: "" });
  }
};