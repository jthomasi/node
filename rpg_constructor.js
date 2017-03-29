var prompt = require('prompt');

function Player(name,profession,gender,age,strength,HitPoints){
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.HitPoints = HitPoints;
	this.PrintStats = function() {
		console.log(this.name,this.profession,this.gender,this.age,this.strength,this.HitPoints);
	};
	this.isAlive = function() {
		if(this.HitPoints > 0){
			console.log("Still alive!");
			callback();
		}
		else {
			console.log("Dead.");
			callback();
		}
	}
	this.attack = function() {
		if(this.name == "Jesse"){
			var myAttack = this.strength;
			var newHealth = (baley.HitPoints) - myAttack;
			baley.HitPoints = newHealth;
			console.log("Baley's new health is: "+newHealth);
			if (newHealth < 0){
				console.log("Baley is dead!");
			}
			else {
				callback();
			}
		}
		else {
			var myAttack = this.strength;
			var newHealth = (jesse.HitPoints) - myAttack;
			jesse.HitPoints = newHealth;
			console.log("Jesse's new health is: "+newHealth);
			if (newHealth < 0){
				console.log("Jesse is dead!");
			}
			else {
				callback();
			}
		}
	}
	this.LevelUp = function() {
		this.age = this.age + 1;
		this.strength = this.strength + 5;
		this.HitPoints = this.HitPoints + 25;
		console.log(this.name+"'s new stats are: Age: "+this.age+", Strength: "+this.strength+", and HitPoints: "+this.HitPoints);
		callback();
	}
}

var jesse = new Player("Jesse","programmer","male",22,10,150);
var baley = new Player("Baley","student","female",20,5,100);

function callback() {

	prompt.start();

	prompt.get(['command'], function (err, result) {
	    
	    if (result.command == "jesse.isAlive") {
			jesse.isAlive();
		}
		else if (result.command == "baley.isAlive") {
			baley.isAlive();
		}
		else if (result.command == "jesse.attack") {
			jesse.attack();
		}
		else if (result.command == "baley.attack") {
			baley.attack();
		}
		else if (result.command == "jesse.LevelUp") {
			jesse.LevelUp();
		}
		else if (result.command == "baley.LevelUp") {
			baley.LevelUp();
		}
		else {
			console.log("Enter proper command.");
			callback();
		}
	});
}

callback();
	


