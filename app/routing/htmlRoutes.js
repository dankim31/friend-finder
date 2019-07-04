var path = require("path");

//ROUTES =======================
//what pages to deliver based on the url

module.exports = function(app){

//sends the user to the survey page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

//sends the user to the home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

} //closes()