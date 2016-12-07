/*
	Gwyneth Raquepo
	Arrays and Objects
	December 5, 2016
*/

//variables

//arrays
var numbers = [2,4,6,8,10,12,14,16,18,20];
var names = ["Senior Tan", "Zakattack", "Yolo Baggins", "Ohai", "Jeff"];
var colors = ["light black", "ron burgandy", "highlighter"];
var adj = ["smart", "special case", "yummy", "tiny whiny", "ferocious"];
var slang = ["scrap", "kobe beef", "da kine", "li 'dat", "pau hana"];

//Objects
var donut = {
	toppings: ["sprinkles", "frosting", "chocolate", "ohare air"],
	filling: "jelly",
	shape: "square",
	count: 12
}

function omg(p){
	console.log(p[1]+p[2]);
}
omg(numbers);

function lol(par){
	for (var i = 0; i <= par.length; i++){
	console.log("I have " + i+ " ducks.");
	}
}
lol(numbers);

function ok(par){
	if(par == true){
		console.log("Hello number "+ donut.toppings[1]);
	}else if(par == false){
		console.log("Our donut is not a "+ donut.shape);
	}
}

ok(donut);