const DeskRepository = require("../../repository/sequelize/DeskRepository");
const BookingRepository = require("../../repository/sequelize/BookingRepository");
const UserRepository = require("../../repository/sequelize/UserRepository");

exports.showBooking = (req, res, next) => {
  let allDesks;
  DeskRepository.getDesks()
    .then(desks => {
      allDesks = desks;
      res.render('mainPanel/bookingPage', {
        info: "",
        allDesks: allDesks,
        navLocation: 'booking'
      });
    });
}

exports.bookDesk = (req, res, next) => {
  const user = req.session.loggedUser;
  const booking = { ...req.body };
  BookingRepository.createBooking(booking, user)
    .then((result) => {
      let allDesks;
      DeskRepository.getDesks()
      .then(desks => {
        allDesks = desks;
        res.render('mainPanel/bookingPage', {
          info: "Booked successfully",
          allDesks: allDesks,
          navLocation: 'booking'
        });
      });
    })
    .catch((err) => {
      console.log(err.errors);
      let allDesks;
      DeskRepository.getDesks()
      .then(desks => {
        allDesks = desks;
        res.render('mainPanel/bookingPage', {
          info: "Failed to book",
          allDesks: allDesks,
          navLocation: 'booking'
        });
      });
    });
};

