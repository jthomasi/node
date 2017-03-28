var operation = process.argv[2];

if (operation == "add") {
	var a = parseFloat(process.argv[3]);
	var b = parseFloat(process.argv[4]);
	var output = a + b;
	console.log(output);
}
else if (operation == "subtract") {
	var a = parseFloat(process.argv[3]);
	var b = parseFloat(process.argv[4]);
	var output = a - b;
	console.log(output);
}
else if (operation == "multiply") {
	var a = parseFloat(process.argv[3]);
	var b = parseFloat(process.argv[4]);
	var output = a * b;
	console.log(output);
}
else if (operation == "divide") {
	var a = parseFloat(process.argv[3]);
	var b = parseFloat(process.argv[4]);
	var output = a / b;
	console.log(output);
}
else if (operation == "remainder") {
	var a = parseFloat(process.argv[3]);
	var b = parseFloat(process.argv[4]);
	var output = a % b;
	console.log(output);
}
else if (operation == "exp") {
	var a = parseFloat(process.argv[3]);
	var b = parseFloat(process.argv[4]);
	var output = Math.pow(a,b);
	console.log(output);
}
else if (operation == "algebra") {
	var formula = process.argv[3];
	var length = formula.length;
	var variable = formula.indexOf("x");
	var operation = formula.indexOf("+")+1;
	var result = formula.indexOf("=")+1;
	var a = formula.slice(0,variable);
	var b = formula.slice(operation,result-1);
	var c = formula.slice(result);
	
	var output = parseFloat((c-b) / a);
	console.log(output);
}	
else {
	console.log("Could not understand input.");
}