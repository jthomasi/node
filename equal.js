var a = process.argv[2];
var b = process.argv[3];

if ( a == b ) {
	console.log("They are the same.");
}
else {
	console.log("They are different.");
}

if ( a%7 == 0 ){
	console.log("a is true");
}
else{
	console.log("a is diff");
}
if ( b%7 == 0 ){
	console.log("b is true");
}
else{
	console.log("b is diff");
}