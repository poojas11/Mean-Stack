// Require all the modules that will be used in server

var express = require("express");

var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");


var config = require('./config');
var registrationLogin = require('./routes/registrationLogin');
var tokenVerify = require('./routes/tokenVerify');
var todoRoutes = require('./routes/todoroutes');

var port = process.env.PORT || 4000 // used to create sign and verify tokens
mongoose.connect(config.database); // connect to database

// use body-parser so we can get info from POST and/or Url parameters

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// use morgan to log requests to the console

app.use(morgan('dev'));

// app.use is used to aware express

app.set('secret', config.secret);

//app.use('/register', registrationLogin);

app.use('/todo', todoRoutes);

// app.use(express.static(__dirname + '/dist'))
// app.use(function(req, res){
//     res.sendFile(__dirname + '/dist/index.html')
// })

app.listen(port);
console.log("Use api routes http://localhost:" + port); 

