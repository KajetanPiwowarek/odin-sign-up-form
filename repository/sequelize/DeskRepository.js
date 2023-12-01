const Sequelize = require("sequelize");

//const Zakup = require('../../model/sequelize/Zakup');
const Desk = require("../../model/sequelize/Desk");
//const Przedmiot = require('../../model/sequelize/Przedmiot');
const authorization = require("../../utils/authorization");

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

