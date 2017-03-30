var prompt = require('prompt');

function DigiPal(name,hungry,sleepy,bored,age){
	this.name = name;
	this.hungry = hungry;
	this.sleepy = sleepy;
	this.bored = bored;
	this.age = age;
	this.feed = function() {
		if (this.hungry)	{
			console.log("That was good.");
			this.hungry = false;
		}
		else {
			console.log("I'm too full.");
			this.hungry = true;
		}
	};
	this.sleep = function() {
		if (this.sleepy) {
			console.log("ZZZZZZZZZZ.");
			this.increaseAge();
			this.sleepy = false;
		}
		else {
			console.log("I'm not tired.");
			this.sleepy = true;
		}
	}
	this.play = function() {
		if (this.bored) {
			console.log("Let's play!");
			this.bored = false;
		}
		else {
			console.log("Leave me be.");
			this.bored = true;
		}
	}
	this.increaseAge = function() {
		console.log("Happy birthday to me!");
		this.age = this.age + 1;
	}
}

var dog = new DigiPal("Spot",true,true,false,1);

dog.Outside = false;
dog.Bark = function() {
	console.log("Bark! Bark!");
}
dog.goOutside = function() {
	if (dog.Outside) {
		console.log("Already outside.");
	}
	else{
		console.log("Yay! I love outside!");
		dog.Outside = true;
	}
}
dog.goInside = function() {
	if (dog.Outside) {
		console.log("I don't want to go inside!");
		dog.Outside = false;
	}
	else{
		console.log("I'm already inside!");
	}
}

var cat = new DigiPal("Suitcase",true,true,true,1);

cat.HouseCondition = 100;
cat.Meow = function() {
	console.log("Meow! Meow!");
}
cat.destroyHouse = function() {
	if (cat.HouseCondition > 0){
		cat.HouseCondition = cat.HouseCondition - 10;
		cat.bored = false;
		cat.sleepy = true;
		console.log("Cat hurt house condition: "+cat.HouseCondition);
	}
	else {
		console.log("The house is gone.");
	}
}
cat.buyNewFurniture = function() {
	cat.HouseCondition = cat.HouseCondition + 50;
	console.log("Added house condition: "+cat.HouseCondition);
}

function callback() {

	prompt.start();

	prompt.get(['command'], function (err, result) {
	    
	    if (result.command == "dog.sleep") {
			dog.sleep();
			callback();
		}
		else if (result.command == "cat.sleep") {
			cat.sleep();
			callback();
		}
		else if (result.command == "dog.feed") {
			dog.feed();
			callback();
		}
		else if (result.command == "cat.feed") {
			cat.feed();
			callback();
		}
		else if (result.command == "dog.play") {
			dog.play();
			callback();
		}
		else if (result.command == "cat.play") {
			cat.play();
			callback();
		}
		else if (result.command == "dog.increaseAge") {
			dog.increaseAge();
			callback();
		}
		else if (result.command == "cat.increaseAge") {
			cat.increaseAge();
			callback();
		}
		else if (result.command == "dog.goOutside") {
			dog.goOutside();
			callback();
		}
		else if (result.command == "dog.goInside") {
			dog.goInside();
			callback();
		}
		else if (result.command == "dog.Bark") {
			dog.Bark();
			callback();
		}
		else if (result.command == "cat.Meow") {
			cat.Meow();
			callback();
		}
		else if (result.command == "cat.destroyHouse") {
			cat.destroyHouse();
			callback();
		}
		else if (result.command == "cat.buyNewFurniture") {
			cat.buyNewFurniture();
			callback();
		}
		else {
			console.log("Enter proper command.");
			callback();
		}
	});
}

callback();