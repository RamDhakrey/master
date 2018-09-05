/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , admin = require('./routes/admin')
  , http = require('http')
  , session = require('express-session')
  , fileUpload = require('express-fileupload')
  , path = require('path')
  , expressValidator = require('express-validator');
//var methodOverride = require('method-override');
var app = express();
/***form validation****/
var mysql      = require('mysql');
var bodyParser =require("body-parser");
var connection = mysql.createConnection({
              host     : '127.0.0.1',
              user     : 'root',
              password : 'onjection1003',
              database : 'node'
            });
 
connection.connect();
 
global.db = connection;

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express());
app.use(expressValidator());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('/', routes.index);//call for main index page
app.get('/login', routes.index);//call for login page
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post
app.post('/login', user.login);//call for login post
app.get('/home/dashboard', user.dashboard);//call for dashboard page after login
app.get('/home/friendlist', user.friendlist);//call for list of all user
app.get('/home/login', routes.index);//
app.get('/home/logout', user.logout);//
app.get('', user.logout);//
app.get('/home/addfriend', admin.addfriend);//call for add user in admin
app.post('/home/addfriend', admin.addfriend);//call for add user in admin

app.get('/home/addfriend/:id', admin.addfriend);
app.post('/home/addfriend/:id', admin.addfriend);
app.get('/home/removefriend/:id', admin.removefriend);
app.post('/home/removefriend/:id', admin.removefriend);
app.post('/upload-image', user.upload_image);
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
//Middleware
app.listen(8080);