const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(8);

exports.hashPassword = (pass) => {
    const passHashed = bcrypt.hashSync(pass, salt);
    return passHashed;
}

exports.comparePasswords = (pass, passHash) => {
    const res = bcrypt.compareSync(pass, passHash);
    return res;
}

exports.permitAuthenticatedUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    if(loggedUser) {
        next();
    } else {
        res.render('index', {
            navLocation: 'main'
        })
        throw new Error('unauthorized access');
    }
}