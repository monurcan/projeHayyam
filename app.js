var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var search = require('./routes/search');
var problem = require('./routes/problem');
var news = require('./routes/news');
var about = require('./routes/about');
var login = require('./routes/login');
var profile = require('./routes/profile');
var logout = require('./routes/logout');
var ajax = require('./routes/ajax');
var register = require('./routes/register');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
    resave: false,
    saveUninitialized: false,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/search', search);
app.use('/problem', problem);
app.use('/news', news);
app.use('/about', about);
app.use('/login', login);
app.use('/profile', profile);
app.use('/logout', logout);
app.use('/ajax', ajax);
app.use('/register', register);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Bulunamadı!');
  err.status = 404;
  next(err);
});

var problemsSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  content: String,
  solved: Number,
  diff: Number,
  tags: Array,
  diff: Number,
  created: String,
  hit: Number,
  answer: String
});
mongoose.model('problems', problemsSchema);

var usersSchema = new mongoose.Schema({
  uname: String,
  pass: String,
  fname: String,
  about: String,
  solved: {
    type: Array,
    ref: 'problems'
  },
  email: String,
  friends: Array,
  solve_after: {
    type: Array,
    ref: 'problems'
  },
  verify: Number
});
mongoose.model('users', usersSchema);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  mongoose.connect('mongodb://127.0.0.1:27017/hayyam');
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
