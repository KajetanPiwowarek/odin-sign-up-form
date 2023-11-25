const Sequelize = require("sequelize");
const createSequelizeInstance = require("../../config/sequelize/sequelize");

createSequelizeInstance().then((sequelize) => {
  const Booking = sequelize.define("Booking", {
    idBooking: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    bookingDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    bookingTime: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    idUser: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idDesk: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  module.exports = Booking;
});
