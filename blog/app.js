var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect("mongodb://admin:admin@ds051873.mlab.com:51873/blog");
var db = mongoose.connection;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
var blog = require('./routes/blog');
var api = require('./routes/api');

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/blog', blog);
app.use('api', api);

app.get('*', function(req, res) {
  res.render('404');
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
