const DeskRepository = require("../../repository/sequelize/DeskRepository");
const BookingRepository = require("../../repository/sequelize/BookingRepository");
const UserRepository = require("../../repository/sequelize/UserRepository");

exports.showCalendar = (req, res, next) => {
  if (req.session.loggedUser.idUser === 1) {
    let allDesks, allUsers, allBookings;
    DeskRepository.getDesks().then((desks) => {
      allDesks = desks;
      return UserRepository.getUsers().then((users) => {
        allUsers = users;
        return BookingRepository.getBookings().then((bookings) => {
          allBookings = bookings;
          res.render("mainPanel/calendarPage", {
            allDesks: allDesks,
            allUsers: allUsers,
            allBookings: allBookings,
            navLocation: "admin",
          });
        })
      })
    });
  } else {
    let allDesks, allUsers, allBookings;
    DeskRepository.getDesks().then((desks) => {
      allDesks = desks;
      return UserRepository.getUsers().then((users) => {
        allUsers = users;
        return BookingRepository.getBookings().then((bookings) => {
          allBookings = bookings;
          res.render("mainPanel/calendarPage", {
            allDesks: allDesks,
            allUsers: allUsers,
            allBookings: allBookings,
            navLocation: "admin",
          });
        })
      })
    });
  }
};