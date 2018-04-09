var getDieRoll = function(dieSize){
	console.log("Rolling die...");
	return Math.ceil(dieSize * Math.random());
};

var roll = getDieRoll(6);
console.log("You rolled a " + roll);

if(roll >= 5 || roll == 1 || roll == 6)
	console.log("You made a great roll.");
else
	console.log("Your roll sucked.");