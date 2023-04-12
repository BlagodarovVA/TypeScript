interface ICar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

@changeDoorStatus(false)
@changeAmountOfFuel(95)
class myCar implements ICar {
	fuel: string = '50%';
	open: boolean = true;
	freeSeats: number;

	@checkAmountOfFuel
	isOpen(value: string) {
		return this.open ? 'open' : `close ${value}`;
	}
}

function checkAmountOfFuel(	
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
) : PropertyDescriptor | void {
	const oldValue = descriptor.value
	descriptor.value = function(this: any, ...args: any[]) {
		console.log(this.fuel);
		return oldValue.apply(this, args);
		// return this.open ? 'open' : 'close';	
	}
}

function changeDoorStatus(status: boolean) {
	// console.log('door init');
	return <T extends {new (...args: any[]): {}} >(constructor: T) => {
		// console.log('door changed');
		return class extends constructor {
			open = status;
		};
	};
}

function changeAmountOfFuel(amount: number) {
	// console.log('fuel init');
	return <T extends {new (...args: any[]): {}} >(constructor: T) => {
		// console.log('fuel changed');
		return class extends constructor {
			fuel = `${amount}%`;
		};
	};
}


const car = new myCar();
console.log(car.isOpen('chick'));		// модифицируем объект и выполняем на нем метод


