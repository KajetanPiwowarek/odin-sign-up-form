// const DeskRepository = require("../../repository/sequelize/DeskRepository");
// const BookingRepository = require("../../repository/sequelize/BookingRepository");
// const UserRepository = require("../../repository/sequelize/UserRepository");

// exports.showCalendar = (req, res, next) => {
//   let allDesks, allUsers;
//   DeskRepository.getDesks()
//     .then(desks => {
//       allDesks = desks;
//       return UserRepository.getUsers();
//     })
//     .then(users => {
//       allUsers = users;
//       res.render('mainPanel/bookingPage', {
//         allDesks: allDesks,
//         allUsers: allUsers,
//         pageTitle: 'Nowe role',
//         btnLabel: 'Dodaj role',
//         formAction: '/roles/add',
//         navLocation: 'role',
//         validationErrors: []
//       });
//     });
// }