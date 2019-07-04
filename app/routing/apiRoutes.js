var path = require("path");

//get my saved data from friends.js file
var friends = require("../data/friends.js");

//ROUTES TO VIEW FRIENDS ===================

module.exports = function (app){

//displays a JSON of all possible friends
	app.get("/api/friends", function(req, res) {
  		res.json(friends);
	});

//handles the user's survey results and compatibility
	app.post("/api/friends", function(req, res) {
//sets up object to capture new friend data
	  var newFriend = {
	  	name: "",
	  	photo: "",
	  	friendDifference: 1000
	  };
	  console.log("requested body is:", req.body); //working

//the user's survey data is parsed 
	  var userData = req.body; //undefinded
	  var userScores = userData.scores;

	  console.log("user scores are: " + userScores);

//variable to be used to calculate the difference between the user's score and those in the DB
	  var totalDifference = 0;


//save the user's data to the DB
	friends.push(userData);

//return a json with the user's best match
	res.json(newFriend);

	}); //closes post
} // closes	module.exports