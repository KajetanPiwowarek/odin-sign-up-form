const sequelize = require("../../config/sequelize/sequelize");

const User = require("../../model/sequelize/User");
const Booking = require("../../model/sequelize/Booking");
const Desk = require("../../model/sequelize/Desk");

const authorization = require("../../utils/authorization");

module.exports = () => {
  User.hasMany(Booking, {
    as: "Bookings",
    foreignKey: { name: "idUser", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });
  Booking.belongsTo(User, {
    as: "User",
    foreignKey: { name: "idUser", allowNull: false },
  });
  Desk.hasMany(Booking, {
    as: "Bookings",
    foreignKey: { name: "idDesk", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });
  Booking.belongsTo(Desk, {
    as: "Desk",
    foreignKey: { name: "idDesk", allowNull: false },
  });

  let allUsers, allDesks;
  return sequelize
    .sync() // { force: true } <- droping all 'reset'
    .then(() => {
      return User.findAll();
    })
    .then((Users) => {
      if (!Users || Users.length == 0) {
        return User.bulkCreate([
          {
            firstName: "Admin",
            lastName: "",
            email: "admin",
            phoneNumber: "",
            password: authorization.hashPassword("admin"),
          },
        ]).then(() => {
          return User.findAll();
        });
      } else {
        return Users;
      }
    })
    .then((Users) => {
      allUsers = Users;
      return Desk.findAll();
    })
    .then((Desks) => {
      if (!Desks || Desks.length == 0) {
        return Desk.bulkCreate([
          // create Desks
        ]).then(() => {
          return Desk.findAll();
        });
      } else {
        return Desks;
      }
    })
    .then((Desks) => {
      allDesks = Desks;
      return Booking.findAll();
    })
    .then((Bookings) => {
      if (!Bookings || Bookings.length == 0) {
        return Booking.bulkCreate([
          //create Bookings
        ]);
      } else {
        return Booking;
      }
    });
};
