// include external modules
var express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
var mongoose = require("mongoose");
var UserFtns = require("./UserFtns.js");
var Schema = mongoose.Schema;
var app = express();

// set the port for use
var PORT = process.env.port || 8000;

// connect to the mongo DB
mongoose.connect('mongodb://localhost');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
	secret: "Secret Key",
	resave: false,
	saveUninitialized: false
}));

// if we want to serve static files out of ./public
app.use(express.static("public"));

// actually start the server
app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});
