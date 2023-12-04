const UserRepository = require("../repository/sequelize/UserRepository");
const DeskRepository = require("../repository/sequelize/DeskRepository");
const BookingRepository = require("../repository/sequelize/BookingRepository");

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
            req.session.loggedUser = user;
            req.session.idSession = user.idSession;

            let allDesks, allBookings;
            DeskRepository.getDesks().then((desks) => {
              allDesks = desks;
              return BookingRepository.getBookings().then((bookings) => {
                allBookings = bookings;
                res.render("mainPanel/mainPage", {
                  allDesks: allDesks,
                  allBookings: allBookings,
                  user: user,
                  navLocation: "main",
                });
              });
            });
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