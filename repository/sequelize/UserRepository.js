const Sequelize = require('sequelize');

//const Zakup = require('../../model/sequelize/Zakup');
const User = require('../../model/sequelize/User');
//const Przedmiot = require('../../model/sequelize/Przedmiot');
const authorization = require("../../utils/authorization");

exports.getUsers = () => {
    return User.findAll();
};

exports.getUserById = (UserId) => {
    return User.findByPk(UserId, {include: [
            {
                model: Booking,
                as: 'booking',
                include: [{
                    model: Desk,
                    as: 'desk',
                }]
            }]
    });
};

exports.createUser = (data) => {
    console.log(JSON.stringify(data));

    return User.create({
        fitstName: data.fitstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: authorization.hashPassword(data.password)
        }
    );
};

exports.updateUser = (UserId, data) => {

    data.password = authorization.hashPassword(data.password)

    return User.update(data, {where: {id: UserId }});
}

exports.findByEmail = (email) => {
    return User.findOne({
        where: {email: email}
    });
}
