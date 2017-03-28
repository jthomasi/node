var command = process.argv[2];

var fs = require("fs");

if ( command == "total" ) {

    fs.readFile("bank.txt", "utf8", function(err, data) {

        "use strict";

        var dataArr = data.split(",");

        console.log("Total: "+dataArr[dataArr.length-1]);

    });

}

else if ( command == "deposit" ) {

    fs.readFile("bank.txt", "utf8", function(err, data) {

        "use strict";

        var dataArr = data.split(",");

        var total = Number(dataArr[dataArr.length-1]);

        var deposit = Number(process.argv[3]);

        var newTotal = total + deposit;

        fs.appendFile("bank.txt", ", A deposit of "+deposit+" was made, "+newTotal, function(err) {

            if (err) {
                 return console.log(err);
            }

            console.log("your bank was updated!");

        });

    });

}

else if ( command == "withdraw" ) {

    fs.readFile("bank.txt", "utf8", function(err, data) {

        "use strict";

        var dataArr = data.split(",");

        var total = Number(dataArr[dataArr.length-1]);

        var withdraw = Number(process.argv[3]);

        var newTotal = total - withdraw;

        fs.appendFile("bank.txt", ", A withdraw of "+withdraw+" was made, "+newTotal, function(err) {

            if (err) {
                 return console.log(err);
            }

            console.log("your bank was updated!");

        });

    });

}

else if ( command == "lotto" ) {

   var randomNum1 = Math.floor((Math.random()*100)+1);
   var randomNum2 = Math.floor((Math.random()*100)+1);

   console.log(randomNum1,randomNum2);

   if ( randomNum1 == randomNum2 ) {

       fs.readFile("bank.txt", "utf8", function(err, data) {

	        "use strict";

	        var dataArr = data.split(",");

	        var total = Number(dataArr[dataArr.length-1]);

	        var winnings = Number(process.argv[3]);

	        var newTotal = total + winnings;

	        fs.appendFile("bank.txt", ", You won the lotto! a deposit of "+winnings+" was made, "+newTotal, function(err) {

	            if (err) {
	                 return console.log(err);
	            }

	            console.log("You won! Check your bank!");

	        });

    	}); 

   }

   else {

   		fs.readFile("bank.txt", "utf8", function(err, data) {

	        "use strict";

	        var dataArr = data.split(",");

	        var total = Number(dataArr[dataArr.length-1]);

	        var losses = 1;

	        var newTotal = total - losses;

	        fs.appendFile("bank.txt", ", You lost the lotto. A withdrawl of "+losses+" was made, "+newTotal, function(err) {

	            if (err) {
	                 return console.log(err);
	            }

	            console.log("You lost :( I wouldn't check your bank...");

            });

    	}); 

   }

}

else {

    console.log("Please enter proper command.");

}