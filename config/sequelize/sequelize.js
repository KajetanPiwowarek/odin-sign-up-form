const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  'project-inz', 'root', 'root',
  {
    host: 'localhost',
    dialect: "mysql",
  }
);

module.exports = sequelize;
