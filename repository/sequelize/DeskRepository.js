const Desk = require("../../model/sequelize/Desk");
const Booking = require("../../model/sequelize/Booking");
const User = require("../../model/sequelize/User");

exports.getDesks = () => {
  return Desk.findAll();
};

exports.getDeskById = (DeskId) => {
  return Desk.findByPk(DeskId, {
    include: [
      {
        model: Booking,
        as: "booking",
        include: [
          {
            model: User,
            as: "user",
          },
        ],
      },
    ],
  });
};

exports.createDesk = (data) => {
  console.log(JSON.stringify(data));

  return Desk.create({
    deskName: data.deskName,
    deskNumber: data.deskNumber,
    floor: data.floor,
    type: data.type,
  });
};

exports.updateDesk = (DeskId, data) => {
  return Desk.update(data, { where: { id: DeskId } });
};
