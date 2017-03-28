// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];

if ( a > b ) {
    if ( a > c ) {
    	if ( b > c ) {
    		console.log(c,b,a);
    	}
    	else{
    		console.log(b,c,a);
    	}
    }
    else {
    	console.log(b,a,c);
    }
}
else {
	if ( a < c ) {
		if ( b > c ) {
			console.log(a,c,b);
		}
		else {
			console.log(a,b,c);
		}
	}
	else {
		console.log(c,a,b);
	}
}