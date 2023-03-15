function printMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log(m));
	} else if (isNumber(msg)) {
		console.log(msg);
	} else {
		console.log(msg);
	}
	//console.log(msg);
}

printMsg(4);

function isNumber(n: unknown): n is number {
	return typeof n === "number";				// true / false
}

interface Car {
	engine: string;
	wheels: {
		number: number;
		type: string;
	};
}

interface Ship {
	engine: string;
	sail: string;
}

function repairVehicle(vehicle: Car | Ship) {
	if (isCar(vehicle)) {
		vehicle.wheels;
	} else if (isShip(vehicle)) {
		vehicle.sail;
	} else {
		vehicle
	}
}

function isCar(car: Car | Ship): car is Car {
	return "wheels" in car;						// проверка, что у объекта есть свойство "wheels"
}

function isCar2(car: Car | Ship): car is Car {
	return (car as Car).wheels.number !== undefined;		// если утвердили как авто, то должны быть колеса
}

function isShip(ship: Car | Ship): ship is Ship {
	return "sail" in ship;
}