interface Car {
	name: 'car'
	engine: string;
	wheels: {
		number: number;
		type: string;
	};
}

interface Ship {
	name: 'ship'
	engine: string;
	sail: string;
}

interface Airplane {
	name: 'airplane'
	engine: string;
	wings: string;
}

interface SuperAirplane {
	name: 'smth'
	engine: string;
	wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAirplane;


function isCar(car: Vehicle): car is Car {
	return "wheels" in car;						// проверка, что у объекта есть свойство "wheels"
}

// function isCar2(car: Car | Ship): car is Car {
// 	return (car as Car).wheels.number !== undefined;		// если утвердили как авто, то должны быть колеса
// }

function isShip(ship: Vehicle): ship is Ship {
	return "sail" in ship;
}


function repairVehicle(vehicle: Vehicle) {
	// if (isCar(vehicle)) {
	// 	vehicle.wheels;
	// } else if (isShip(vehicle)) {
	// 	vehicle.sail;
	// } else {
	// 	vehicle.wings;
	// }

	switch (vehicle.name) {
		case 'car':
			console.log(vehicle.wheels);
			break;
		case 'ship':
			console.log(vehicle.sail);
			break;
		case 'airplane':
			console.log(vehicle.wings);
			break;
		default:
			const smth: never = vehicle;		// позволяет увидеть новый ти, который нне обработан
			console.log('Не существующий тип')
	}
}





