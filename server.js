// Mongo Scraper
// Written by Kevin Smith
// University of Utah Coding Bootcamp

var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require all database models
var db = require("./models");

// Set port to listen on
var PORT = 3000;

// Initialize Express
var app = express();

// Express-handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(logger("dev"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Express static directory
app.use(express.static("public"));

// Connect to the Mongo DB

mongoose.connect('mongodb://dbadmin:aslksjdfiewr32345@ds139920.mlab.com:39920/heroku_pmp7xwkn');

// Require our routes
require('./routes/routes.js')(app);

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT);
});