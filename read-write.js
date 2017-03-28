var a = parseFloat(process.argv[2]);

var fs = require("fs");

if ( a == 1 ) {

    fs.writeFile("movies.txt", "Die Hard, John Wick", function(err) {

        "use strict";
        if (err) {
            return console.log(err);
        }

        console.log("moviees.txt was updated!");

    });

}

else if ( a == 2 ) {

    fs.readFile("movies.txt", "utf8", function(error, data) {

        "use strict";

        console.log(data);

        var dataArr = data.split(",");

        console.log(dataArr);

    });

}

else if ( a == 3 ) {

    fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

        "use strict";

        var dataArr = data.split(",");

        for ( var i=0 ; i<dataArr.length ; i++ ) {
            console.log(dataArr[i]);
        }
    });

}

else if ( a == 4 ) {

    fs.appendFile("best_things_ever.txt", "John Wick 2", function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("best things ever was updated!");

    })

}

else if ( a == 5 ) {

    var fileName = process.argv[3];
    var text = process.argv[4];

    fs.appendFile(fileName, text, function(err) {

        if (err) {
            return console.log(err);
        }

        console.log(fileName+" was updated!");
    });

}

else {

     console.log("command please");

}