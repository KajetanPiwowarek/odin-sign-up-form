const UserRepository = require("../repository/sequelize/UserRepository");
const DeskRepository = require("../repository/sequelize/DeskRepository");
const BookingRepository = require("../repository/sequelize/BookingRepository");

const authorization = require("../utils/authorization");
const generateNewSessionId = require("../utils/sessionIdGenerator");

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  UserRepository.findByEmail(email)
    .then((user) => {
      if (!user) {
        res.render("login", {
          navLocation: "login",
          info: "User doesn't exist",
        });
      } else if (
        authorization.comparePasswords(password, user.password) === true
      ) {
        if (user.idSession) {
          user.idSession = null;
          user.save();

          const newSessionId = generateNewSessionId();

          user.idSession = newSessionId;
          user.save();

          req.session.loggedUser = user;
          req.session.idSession = newSessionId;

          if (user.idUser === 1) {
            let allDesks, allBookings;
            DeskRepository.getDesks().then((desks) => {
              allDesks = desks;
              return BookingRepository.getBookings().then((bookings) => {
                allBookings = bookings;
                res.render("mainPanel/mainPage", {
                  allDesks: allDesks,
                  allBookings: allBookings,
                  user: user,
                  navLocation: "admin",
                });
              });
            });
          } else {
            res.redirect("/home");
          }

          // terminating session logic

          // req.session.destroy((err) => {
          //   if (err) {
          //     console.error("Error destroying session:", err);
          //   }
          //   res.render("login", {
          //     navLocation: "login",
          //     info: "User is already logged in. (Logging out)",
          //   });
          // });
        } else {
          const newSessionId = generateNewSessionId();

          user.idSession = newSessionId;
          user.save();

          req.session.loggedUser = user;
          req.session.idSession = newSessionId;

          if (user.idUser === 1) {
            let allDesks, allBookings;
            DeskRepository.getDesks().then((desks) => {
              allDesks = desks;
              return BookingRepository.getBookings().then((bookings) => {
                allBookings = bookings;
                res.render("mainPanel/mainPage", {
                  allDesks: allDesks,
                  allBookings: allBookings,
                  user: user,
                  navLocation: "admin",
                });
              });
            });
          } else {
            res.redirect("/home");
          }
        }
      } else {
        res.render("login", {
          navLocation: "login",
          info: "Wrong password",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.home = (req, res, next) => {
  if (req.session.loggedUser) {
    const user = req.session.loggedUser;
    UserRepository.findById(user.idUser)
      .then((user) => {
        user.idSession = null;
        user.save();

        req.session.destroy((err) => {
          if (err) {
            console.error("Error destroying session:", err);
          }
          res.render("login", { navLocation: "login", info: "" });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.render("login", { navLocation: "login", info: "" });
  }
};
