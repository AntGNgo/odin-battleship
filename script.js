class Ship {
	constructor(length) {
		(this.length = length), (this.numberOfHits = 0);
	}
	hit() {
		this.numberOfHits++;
	}

	get isSunken() {
		return this.numberOfHits === this.length;
	}
}

class Gameboard {}

module.exports = { Ship, Gameboard };
