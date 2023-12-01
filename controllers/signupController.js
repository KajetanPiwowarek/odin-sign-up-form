const UserRepository = require('../repository/sequelize/UserRepository');

exports.signup = (req, res, next) => {
  const user = {...req.body};
  UserRepository.createUser(user)
      .then(result => {
        req.session.loggedUser = user;
        res.redirect('/home');
      })
      .catch(err => {
          console.log(err.errors)
          res.render('signup', {
              navLocation: 'signup',
          })
      });
};