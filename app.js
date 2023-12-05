var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/loginRoute');
var logoutRouter = require('./routes/logoutRoute');
var signupRouter = require('./routes/signupRoute');
var adminRouter = require('./routes/mainPanelRoutes/adminRoute');
var bookingRouter = require('./routes/mainPanelRoutes/bookingRoute');
var calendarRouter = require('./routes/mainPanelRoutes/calendarRoute');
var mainRouter = require('./routes/mainPanelRoutes/mainRoute');
var userRouter = require('./routes/mainPanelRoutes/userRoute');

const UserRepository = require("./repository/sequelize/UserRepository");

// database connection
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });

var app = express();

const session = require('express-session');
const authorization = require("./utils/authorization");
app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 1000,
    },
}));


app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;
    if(!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/logout', authorization.permitAuthenticatedUser, logoutRouter);
app.use('/admin', authorization.permitAuthenticatedUser , adminRouter);
app.use('/booking', authorization.permitAuthenticatedUser, bookingRouter);
app.use('/calendar', authorization.permitAuthenticatedUser, calendarRouter);
app.use('/home', authorization.permitAuthenticatedUser, mainRouter);
app.use('/user', authorization.permitAuthenticatedUser, userRouter);

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