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
    .sync({ force: true })
    .then(() => {
      return User.findAll();
    })
    .then((Users) => {
      if (!Users || Users.length == 0) {
        return User.bulkCreate([
          {
            firstName: "Admin",
            lastName: "Admin",
            email: "admin@gmail.com",
            phoneNumber: "123456789",
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
          { deskName: "adam", deskNumber: "207", floor: "2", type: "standing" },
          { deskName: "bob", deskNumber: "108", floor: "1", type: "sitting" },
          { deskName: "bob", deskNumber: "104", floor: "1", type: "sitting" },
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
          {
            idUser: allUsers[0].idUser,
            idDesk: allDesks[0].idDesk,
            BookingDate: "2023-11-28",
            BookingTime: "12:00",
          },
        ]);
      } else {
        return Desks;
      }
    });
};
