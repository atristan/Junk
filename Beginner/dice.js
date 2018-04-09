var die = {
	size: 6,
	totalRolls: 0,
	roll: function() {
		var result = Math.ceil(this.size * Math.random());
		this.totalRolls += 1;
		return result;
	}
};

die.name = "TEST";
exports.die = die;
exports.game = die;