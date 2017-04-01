var name = process.argv[2];
var zipcode = process.argv[3];
var User = require('./user');
var Admin = require('./admin');

if (name == "user") {

	var newSearch = new User(name,zipcode);

	newSearch.getWeather();

}

else if (name == "admin") {

	var getSearches = new Admin();

	getSearches.getHist();

}
else {
	console.log("Please enter a proper command");
}