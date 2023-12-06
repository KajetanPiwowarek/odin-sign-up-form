const DeskRepository = require("../../repository/sequelize/DeskRepository");
const BookingRepository = require("../../repository/sequelize/BookingRepository");

exports.showBooking = (req, res, next) => {
  const user = req.session.loggedUser;
  if (user.idUser === 1) {
    let allDesks;
    DeskRepository.getDesks().then((desks) => {
      allDesks = desks;
      return BookingRepository.getBookings().then((bookings) => {
        allBookings = bookings;
        res.render("mainPanel/bookingPage", {
          info: "",
          user: user,
          allDesks: allDesks,
          allBookings: allBookings,
          navLocation: "admin",
          status: "",
        });
      });
    });
  } else {
    let allDesks;
    DeskRepository.getDesks().then((desks) => {
      allDesks = desks;
      return BookingRepository.getBookings().then((bookings) => {
        allBookings = bookings;
        res.render("mainPanel/bookingPage", {
          info: "",
          user: user,
          allDesks: allDesks,
          allBookings: allBookings,
          navLocation: "booking",
          status: "",
        });
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
        const existingBookingTime = existingBooking.bookingTime.substring(0, 5);
        return (
          existingBooking.idDesk == booking.idDesk &&
          existingBooking.floor == booking.floor &&
          existingBookingDate == booking.bookingDate &&
          existingBookingTime == booking.bookingTime
        );
      });

      if (!isDeskAlreadyBooked) {
        BookingRepository.createBooking(booking, user)
          .then((result) => {
            if (user.idUser === 1) {
              let allDesks;
              DeskRepository.getDesks().then((desks) => {
                allDesks = desks;
                return BookingRepository.getBookings().then((bookings) => {
                  allBookings = bookings;
                  res.render("mainPanel/bookingPage", {
                    info: "Booked successfully",
                    user: user,
                    allDesks: allDesks,
                    allBookings: allBookings,
                    navLocation: "admin",
                    status: "positive",
                  });
                });
              });
            } else {
              let allDesks;
              DeskRepository.getDesks().then((desks) => {
                allDesks = desks;
                return BookingRepository.getBookings().then((bookings) => {
                  allBookings = bookings;
                  res.render("mainPanel/bookingPage", {
                    info: "Booked successfully",
                    user: user,
                    allDesks: allDesks,
                    allBookings: allBookings,
                    navLocation: "booking",
                    status: "positive",
                  });
                });
              });
            }
          })
          .catch((err) => {
            console.log(err.errors);
            if (user.idUser === 1) {
              let allDesks;
              DeskRepository.getDesks().then((desks) => {
                allDesks = desks;
                return BookingRepository.getBookings().then((bookings) => {
                  allBookings = bookings;
                  res.render("mainPanel/bookingPage", {
                    info: "Failed to book",
                    user: user,
                    allDesks: allDesks,
                    allBookings: allBookings,
                    navLocation: "admin",
                    status: "negative",
                  });
                });
              });
            } else {
              let allDesks;
              DeskRepository.getDesks().then((desks) => {
                allDesks = desks;
                return BookingRepository.getBookings().then((bookings) => {
                  allBookings = bookings;
                  res.render("mainPanel/bookingPage", {
                    info: "Failed to book",
                    user: user,
                    allDesks: allDesks,
                    allBookings: allBookings,
                    navLocation: "booking",
                    status: "negative",
                  });
                });
              });
            }
          });
      } else {
        if (user.idUser === 1) {
          let allDesks;
          DeskRepository.getDesks().then((desks) => {
            allDesks = desks;
            return BookingRepository.getBookings().then((bookings) => {
              allBookings = bookings;
              res.render("mainPanel/bookingPage", {
                info: "Desk is already booked",
                user: user,
                allDesks: allDesks,
                allBookings: allBookings,
                navLocation: "admin",
                status: "negative",
              });
            });
          });
        } else {
          let allDesks;
          DeskRepository.getDesks().then((desks) => {
            allDesks = desks;
            return BookingRepository.getBookings().then((bookings) => {
              allBookings = bookings;
              res.render("mainPanel/bookingPage", {
                info: "Desk is already booked",
                user: user,
                allDesks: allDesks,
                allBookings: allBookings,
                navLocation: "booking",
                status: "negative",
              });
            });
          });
        }
      }
    })
    .catch((err) => {
      console.log(err.errors);
      if (user.idUser === 1) {
        let allDesks;
        DeskRepository.getDesks().then((desks) => {
          allDesks = desks;
          return BookingRepository.getBookings().then((bookings) => {
            allBookings = bookings;
            res.render("mainPanel/bookingPage", {
              info: "Failed to load bookings",
              user: user,
              allDesks: allDesks,
              allBookings: allBookings,
              navLocation: "admin",
              status: "negative",
            });
          });
        });
      } else {
        let allDesks;
        DeskRepository.getDesks().then((desks) => {
          allDesks = desks;
          return BookingRepository.getBookings().then((bookings) => {
            allBookings = bookings;
            res.render("mainPanel/bookingPage", {
              info: "Failed to load bookings",
              user: user,
              allDesks: allDesks,
              allBookings: allBookings,
              navLocation: "booking",
              status: "negative",
            });
          });
        });
      }
    });
};
