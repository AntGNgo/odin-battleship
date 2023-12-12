const { Ship, Gameboard } = require('./script');

describe('Ship Class', () => {
	beforeEach(() => {
		ship = new Ship(4);
	});
	test('Create new ship', () => {
		expect(ship).toEqual({ length: 4, numberOfHits: 0 });
	});

	test('Ship hit', () => {
		ship.hit();
		expect(ship.numberOfHits).toBe(1);
	});

	test('Ship is sunken', () => {
		const deadShip = new Ship(0);

		expect(deadShip.isSunken).toBe(true);
		expect(ship.isSunken).toBe(false);
	});
});

describe('Gameboard Class', () => {
	beforeEach(() => {
		gameBoard = new Gameboard();
	});

	test('create new board', () => {
		expect(gameBoard.board).toEqual([]);
	});

	test('place ship', () => {
		gameBoard.placeShip(new Ship(1), [1, 1]);
		expect(gameBoard.board).toEqual([[1, 1]]);
	});

	test('ship length spans board', () => {
		gameBoard.placeShip(new Ship(4), [1, 1], false);
		expect(gameBoard.board).toEqual([[1, 4]]);

		gameBoard.placeShip(new Ship(4), [1, 4], true);
	});

	test.todo('ship is flipped if goes over edge');
});
