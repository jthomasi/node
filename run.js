var stuffINeed = require("./bands.js").music;
var type = process.argv[2] || "";

if (type == "") {
	console.log("------------------------");
	console.log("The stuff I need: ");
	for (var key in stuffINeed){
		console.log("A "+key+" band is "+stuffINeed[key]);
	}
	console.log("------------------------");
}
else {
	console.log("------------------------");
	console.log("Response: ");
	if (type in stuffINeed){
		console.log("A "+type+" band is "+stuffINeed[type]);
	}
	else {
		console.log("Your input DNE.");
	}
	console.log("------------------------");
}

