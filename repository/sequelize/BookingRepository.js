const Sequelize = require('sequelize');

const Desk = require("../../model/sequelize/Desk");
const Booking = require("../../model/sequelize/Booking");
const User = require("../../model/sequelize/User");

exports.getBookings = () => {
  return Booking.findAll({include: [
    {
      model: User,
      as: 'user'
    },
    {
      model: Desk,
      as: 'desk'
    }]
  });
};

exports.getBookingById = (idBooking) => {
  return Booking.findByPk(idBooking, {include: [
    {
      model: User,
      as: 'user'
    },
    {
      model: Desk,
      as: 'desk'
    }]
  });
};

exports.createBooking = (newBookingData, userData) => {
  console.log(JSON.stringify(newBookingData));

  return Booking.create({
    idUser: userData.idUser,
    idDesk: newBookingData.idDesk,
    bookingDate: newBookingData.bookingDate,
    bookingTime: newBookingData.bookingTime
  });
};

exports.deleteBooking = (idBooking) => {
  return Booking.destroy({
    where: {idBooking: idBooking}
  });
};
