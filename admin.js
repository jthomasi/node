var fs = require("fs");

function Admin(){
	this.getHist = function() {

		fs.readFile("command_weather.txt", "utf8", function(error, data) {

		    "use strict";

		    var dataArr = data.split(";");

		    for (var i=0 ; i<dataArr.length ; i++) {
		        console.log(dataArr[i]);
		    }
		});
	}
}

module.exports = Admin;