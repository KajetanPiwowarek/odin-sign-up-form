require('dotenv').config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  'project-inz-db',
  'admin123',
  'DQ75}*.*5f!ib2!DQ75}*.*5f!ib2!',
  {
    host: 'project-inz-server.database.windows.net',
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: true,
      },
    },
  }
);

module.exports = sequelize;
