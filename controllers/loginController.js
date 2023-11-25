const UserRepository = require('../repository/sequelize/UserRepository');
const authorization = require("../utils/authorization");


exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    UserRepository.findByEmail(email)
        .then(user => {
            if(!user) {
                res.render('login', {
                    navLocation: 'login',
                })
            } else if(authorization.comparePasswords(password, user.password) === true)  {
                req.session.loggedUser = user;
                res.redirect('/home');
            } else {
                res.render('login', {
                    navLocation: 'login',
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

}
