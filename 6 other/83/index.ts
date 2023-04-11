interface ICar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

@closeCar						// оборачиваем класс в функцию
class myCar implements ICar {
	fuel: string = '50%';
	open: boolean = true;
	freeSeats: number;
	isOpen() {
		console.log(this.fuel);
		return this.open ? 'open' : 'close';
	}
}


function closeCar<T extends {new (...args: any[]): {}} >(constructor: T) {
	return class extends constructor {
		open = false;
	}
}

// function addFuel(car: myCar) {
// 	car.fuel = '100%';
// 	console.log('add fuel');
// 	return car;	
// }

const car = new myCar();
console.log(car.isOpen());		// модифицируем объект и выполняем на нем метод




