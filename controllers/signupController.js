const UserRepository = require('../repository/sequelize/UserRepository');
const authorization = require("../utils/authorization");


exports.signup = (req, res, next) => {
  const user = {...req.body};
  UserRepository.createUser(user)
      .then(result => {
          res.render('mainPanel/mainPage', {
              navLocation: 'home',
          })
      })
      .catch(err => {
          console.log(err.errors)
          res.render('signup', {
              navLocation: 'signup',
          })
      });
};