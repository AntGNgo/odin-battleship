const Ship = require('./script');

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
