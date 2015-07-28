// Load modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');

// Load Routes
var routes = require('./routes/index');
var cal = require('./routes/calendar');
var trivia = require('./routes/trivia');
var slinks = require('./routes/slinks');
var arcana = require('./routes/arcana');
var days = require('./routes/days')

var app = express();

// Setup Swig renderer
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// setup other modules
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//setup static folder named 'public'
app.use(express.static(path.join(__dirname, 'public')));

//Call on routers
app.use('/', routes);
app.use('/calendar', cal);
app.use('/trivia', trivia);
app.use('/slinks', slinks);
app.use('/arcana', arcana);
app.use('/days', days);

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
	    console.log(err.message);
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
