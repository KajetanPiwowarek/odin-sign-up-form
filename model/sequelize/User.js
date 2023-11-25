const Sequelize = require("sequelize");
const createSequelizeInstance = require("../../config/sequelize/sequelize");

createSequelizeInstance().then((sequelize) => {
  const User = sequelize.define("User", {
    idUser: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  module.exports = User;
});
