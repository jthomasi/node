var request = require("request");

var movie = "";

var command = process.argv;

console.log(command);

for (var i=2; i<command.length; i++) {
	
	movie = movie + "+" + command[i];
	
}

console.log(movie);

var url = "https://www.omdbapi.com/?t="+movie+"&plot=short$r=json";
request(url, function(error, response, body) {

    if (!error && response.statusCode === 200){
        console.log(JSON.parse(body).Year);
    }
    else {
    	console.log(error);
    }

})