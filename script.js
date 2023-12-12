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

class Gameboard {
	constructor() {
		this.board = [];
	}

	placeShip(ship, shipStartPos, isVertical) {
		if (!isVertical) {
			this.board.push([shipStartPos[0], shipStartPos[1] + ship.length - 1]);
		}
	}
}

module.exports = {
	Ship,
	Gameboard,
};
