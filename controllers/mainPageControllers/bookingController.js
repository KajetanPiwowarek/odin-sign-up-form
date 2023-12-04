const DeskRepository = require("../../repository/sequelize/DeskRepository");
const BookingRepository = require("../../repository/sequelize/BookingRepository");

exports.showBooking = (req, res, next) => {
  if (req.session.loggedUser.idUser === 1) {
    let allDesks;
    DeskRepository.getDesks().then((desks) => {
      allDesks = desks;
      res.render("mainPanel/bookingPage", {
        info: "",
        allDesks: allDesks,
        navLocation: "admin",
        status: "",
      });
    });
  } else {
    let allDesks;
    DeskRepository.getDesks().then((desks) => {
      allDesks = desks;
      res.render("mainPanel/bookingPage", {
        info: "",
        allDesks: allDesks,
        navLocation: "booking",
        status: "",
      });
    });
  }
};

exports.bookDesk = (req, res, next) => {
  const user = req.session.loggedUser;
  const booking = { ...req.body };

  BookingRepository.getBookings()
    .then((bookings) => {
      const isDeskAlreadyBooked = bookings.some((existingBooking) => {
        const existingBookingDate = new Date(existingBooking.bookingDate)
          .toISOString()
          .split("T")[0];
        const existingBookingTime = new Date(existingBooking.bookingTime)
          .toISOString()
          .split("T")[1]
          .substring(0, 5);

        return (
          existingBooking.idDesk == booking.idDesk &&
          existingBookingDate == booking.bookingDate &&
          existingBookingTime == booking.bookingTime
        );
      });

      if (isDeskAlreadyBooked) {
        let allDesks;
        DeskRepository.getDesks().then((desks) => {
          allDesks = desks;
          res.render("mainPanel/bookingPage", {
            info: "Desk is already booked",
            allDesks: allDesks,
            navLocation: "booking",
            status: "negative",
          });
        });
      } else {
        BookingRepository.createBooking(booking, user)
          .then((result) => {
            let allDesks;
            DeskRepository.getDesks().then((desks) => {
              allDesks = desks;
              res.render("mainPanel/bookingPage", {
                info: "Booked successfully",
                allDesks: allDesks,
                navLocation: "booking",
                status: "positive",
              });
            });
          })
          .catch((err) => {
            console.log(err.errors);
            let allDesks;
            DeskRepository.getDesks().then((desks) => {
              allDesks = desks;
              res.render("mainPanel/bookingPage", {
                info: "Failed to book",
                allDesks: allDesks,
                navLocation: "booking",
                status: "negative",
              });
            });
          });
      }
    })
    .catch((err) => {
      console.log(err.errors);
      let allDesks;
      DeskRepository.getDesks().then((desks) => {
        allDesks = desks;
        res.render("mainPanel/bookingPage", {
          info: "Failed to load bookings",
          allDesks: allDesks,
          navLocation: "booking",
          status: "negative",
        });
      });
    });
};
