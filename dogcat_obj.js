// var dog = {
// 	raining: true,
// 	noise: "Woof!",
// 	makeNoise: function(){
// 		if(this.raining){
// 			console.log(this.noise);
// 		}
// 	}
// }

// var cat = {
// 	raining: false,
// 	noise: "Meow!",
// 	makeNoise: function(){
// 		if(!this.raining){
// 			console.log(this.noise);
// 		}
// 	}
// }

// Constructor 
function Animal(raining,noise){
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function() {
		if(this.raining){
			console.log(this.noise);
		}
	};
}

var dog = new Animal(true, "Woof!");
var cat = new Animal(true, "Meow!");

function massHysteria(dogs,cats) {
	if((dog.raining) && (!cat.raining)) {
		console.log("Dogs and cats are living together!");
	}
}

dog.makeNoise();
cat.makeNoise();
massHysteria(dog,cat);