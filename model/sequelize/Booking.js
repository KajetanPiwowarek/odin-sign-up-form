const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Booking = sequelize.define('Booking', {
  idBooking: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  bookingDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  bookingTime: {
    type: Sequelize.TIME,
    allowNull: true,
  },
  idFilm: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  idActor: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = Booking;