//DEPENDENCIES ================
//npm packages that give my server functionality

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//EXPRESS CONFIGURATION =======
//sets up the properties for my express server

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


//ROUTER ======================
//points my server to route files. these routes are a map of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// LISTENER ====================
//starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});