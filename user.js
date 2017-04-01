var weather = require("weather-js");
var fs = require("fs");

function User(name,zipcode) {

	this.name = name;
	this.zipcode = zipcode;
	this.getWeather = function() {

		weather.find({ search: zipcode, degreeType: "F" }, function(err, result) {
	   
		    if (err) {
		      
		      console.log("Sorry we don't have enough data on that location! Try somewhere else.");
		     
		      return;
		    }

		    console.log("Weather Forecast: ");
		    console.log("-------------------------------------------------------------------");
		    console.log("Current Temperature: " + result[0].current.temperature + " F");
		    console.log("Sky: " + result[0].current.skytext);
		    console.log("Tomorrow's Forecast: Low of " + result[0].forecast[1].low + "F, High of " + result[0].forecast[1].high + "F");
		    console.log("-------------------------------------------------------------------");

		    var date = Date.now();

		    var fileLine = "Search: "+zipcode+", "+"Current Temperature: "+ result[0].current.temperature + " F,"+" Sky: " + result[0].current.skytext+", "+"Tomorrow's Forecast: Low of " + result[0].forecast[1].low + "F, High of " + result[0].forecast[1].high + "F "+date+";";

		    fs.appendFile("command_weather.txt", fileLine, function(err) {

		        if (err) {
		            return console.log(err);
		        }

		        console.log("commands_weather ever was updated!");

		    });
		});	

	}

}

module.exports = User;