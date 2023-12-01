const DeskRepository = require('../../repository/sequelize/DeskRepository');

exports.createDesk = (req, res, next) => {
  const desk = {...req.body};
  DeskRepository.createDesk(desk)
      .then(result => {
        res.render('mainPanel/adminPage', {
          info: 'Desk added successfully',
          navLocation: 'admin',
        })
      })
      .catch(err => {
          console.log(err.errors)
          res.render('mainPanel/adminPage', {
              navLocation: 'admin',
          })
      });
};