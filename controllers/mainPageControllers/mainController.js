const DeskRepository = require("../../repository/sequelize/DeskRepository");
const BookingRepository = require("../../repository/sequelize/BookingRepository");

exports.home = (req, res, next) => {
  const user = req.session.loggedUser;
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
  }
};

exports.cancelBooking = (req, res, next) => {
  const idBooking = req.params.idBooking;
  BookingRepository.deleteBooking(idBooking)
    .then( result => {
      res.redirect('/home');
    });
}
