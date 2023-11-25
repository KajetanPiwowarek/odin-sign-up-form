var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/loginRoute');
var signupRouter = require('./routes/signupRoute');
var adminRouter = require('./routes/mainPanelRoutes/adminRoute');
var bookingRouter = require('./routes/mainPanelRoutes/bookingRoute');
var calendarRouter = require('./routes/mainPanelRoutes/calendarRoute');
var mainRouter = require('./routes/mainPanelRoutes/mainRoute');
var userRouter = require('./routes/mainPanelRoutes/userRoute');

/* Routery
const actorRouter = require('./routes/actorRoute');
const actorApiRouter = require('./routes/api/ActorApiRoute');
*/

// database connection
/*
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });
*/


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/admin', adminRouter);
app.use('/booking', bookingRouter);
app.use('/calendar', calendarRouter);
app.use('/home', mainRouter);
app.use('/user', userRouter);

/*
app.use('/actors', actorRouter);
app.use('/api/actors', actorApiRouter);
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;