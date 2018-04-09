var getDieRoll = function(dieSize){
	console.log("Rolling die...");
	return Math.ceil(dieSize * Math.random());
};

var showResults = function(){
	console.log(firstDie);
	console.log(secondDie);
	console.log(firstDie + " + " + secondDie + " = " + (firstDie + secondDie));
};

var firstDie = getDieRoll(12);
var firstDie = getDieRoll(12);
var secondDie = getDieRoll(6);

showResults();
