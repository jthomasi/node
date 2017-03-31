var inquirer = require("inquirer");

var starters = [];
var subs = [];
var team = [];
var teamOff = 0;
var teamDef = 0;
var teamScore = 0;

function Player(name,position,offense,defense){
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
	this.goodGame = function(){
		var random = Math.floor((Math.random()*2)+1);
		if (random == 1){
			this.offense = this.offense + 5;
		}
		else {
			this.defense = this.defense + 5;
		}
	};
	this.badGame = function(){
		var random = Math.floor((Math.random()*2)+1);
		if (random == 1){
			this.offense = this.offense - 5;
		}
		else {
			this.defense = this.defense - 5;
		}
	};
	this.printStats = function(){
		console.log(this.name+" Stats: ");
		console.log("Position: "+this.position);
		console.log("Offense: "+this.offense);
		console.log("Defense: "+this.defense);
	};
}
var count = 0;

function createPlayer() {

	if (count < 5) {

	    console.log("NEW STARTER");
	    
	    inquirer.prompt([
	      {
	        name: "name",
	        message: "What is his/her name?"
	      }, {
	        name: "position",
	        message: "What is thier current position?"
	      }
	    ]).then(function(answers) {
	      
	      var randOff = Math.floor((Math.random()*10)+1);
		  var randDef = Math.floor((Math.random()*10)+1);
	      var newGuy = new Player(
	        answers.name,
	        answers.position,
	        randOff,
	        randDef);
	     
	      starters.push(newGuy);
	      team.push(newGuy);
	     
	      count++;
	    
	      createPlayer();
	    });
	    
	}
    else if ((count >= 5) && (count < 8)) {

        console.log("NEW SUB");
	    
	    inquirer.prompt([
	      {
	        name: "name",
	        message: "What is his/her name?"
	      }, {
	        name: "position",
	        message: "What is thier current position?"
	      }
	    ]).then(function(answers) {
	      
	      var randOff = Math.floor((Math.random()*10)+1);
		  var randDef = Math.floor((Math.random()*10)+1);
	      var newGuy = new Player(
	        answers.name,
	        answers.position,
	        randOff,
	        randDef);
	     
	      subs.push(newGuy);
	      team.push(newGuy);
	      
	      count++;
	     
	      createPlayer();
	    });
	}
    else {
    	console.log("Starters: ");
	    for (var x = 0; x < 5; x++) {
	      starters[x].printStats();
	      teamOff += starters[x].offense;
	      teamDef += starters[x].defense;
	    }
	    console.log("Subs: ");
	    for (var i = 0; i <= 2; i++) {
	      subs[i].printStats();
	    }
	    playGame();
    }
};

createPlayer();

function playGame() {

	inquirer.prompt([
      {
        name: "start",
        message: "Enter \"play\" if you want to start!"
      }
    ]).then(function(answers) {

    	if (answers.start == "play"){

    		play();

    	}
    	else {
    		console.log("okay jerk");
    	}
      
    });
	
};

var playCount = 0;

function play() {

	if (playCount < 10) {

		var randOff = Math.floor((Math.random()*50)+1);
		var randDef = Math.floor((Math.random()*50)+1);

		if (randOff < teamOff) {
			teamScore++;
			subPlayer();
		}
		else if (randOff > teamOff){
			teamScore--;
			subPlayer();
		}
		else if (randDef < teamDef){
			teamScore++;
			subPlayer();
		}
		else if (randDef > teamDef){
			teamScore--;
			subPlayer();
		}
		else {
			console.log('hey');
		}

	}
	else{
		console.log("game end");
		if (teamScore >= 0){
			for (var x = 0; x < team.length; x++) {
		      team[x].goodGame();
		    }
		    console.log("team had a good game.");
		    playAgain();

	    }
	    else {
	    	for (var x = 0; x < team.length; x++) {
		      team[x].badGame();
		    }
		    console.log("team had a bad game.");
		    playAgain();
	    }
	}
}

function subPlayer(name) {

	inquirer.prompt([
      {
        name: "sub",
        message: "Want to sub someone? Enter \"yes\" to sub."
      }
    ]).then(function(answers) {
      
	  	if (answers.sub == "yes") {
	  		sub(); 
	  	}
	  	else {
	  		console.log("Okay!");
	  		playCount++;
	  		console.log(teamScore);
	  		play();
	  	}

    });
	
}

function sub() {

	inquirer.prompt([
      {
        name: "subName",
        message: "What is the name of the sub you want to put in?"
      }, {
        name: "playerName",
        message: "Who do you want to take out for your sub?"
      }
    ]).then(function(answers) {
      
	  	var sub = answers.subName;
	  	var player = answers.playerName;

	  	var index = team.indexOf(player);

		

	});

}

function playAgain() {

	inquirer.prompt([
      {
        name: "again",
        message: "Enter \"yes\" if you want to play again!"
      }
    ]).then(function(answers) {

    	if (answers.again == "yes"){

    		playCount = 0;
    		teamScore = 0;
    		play();

    	}
    	else {
    		console.log("okay jerk");
    	}
      
    });

}
