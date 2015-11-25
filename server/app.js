var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();
var config = require('./config')[app.get('env')];

// View engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view cache', true);
swig.setDefaults({ cache: false });
swig.setFilter('isNotUndefined', function(element) {
    return typeof element !== 'undefined';
});
swig.setDefaults({
    locals: {
        now: function () {
            return new Date();
        }
    }
});

// Log all dev to console
app.use(logger('dev'));

// Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Statically serve public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Database
mongoose.connect(config.database);
mongoose.connection.on('error', console.error.bind(console, 'Mongo DB:'));
mongoose.connection.once('open', function() {
    console.log('Mongo DB: Connected to', config.database);
});

// Routes
app.use('/', require('../routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

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
