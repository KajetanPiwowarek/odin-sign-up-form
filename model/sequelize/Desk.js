const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Desk = sequelize.define("Desk", {
  idDesk: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  deskName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  deskNumber: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  floor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Desk;
