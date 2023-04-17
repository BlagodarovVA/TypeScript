interface ICar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

@changeDoorStatus(false)
@changeAmountOfFuel(95)
class myCar implements ICar {
	fuel: string = "50%";
	open: boolean = true;
	errors: any;

	@checkNumberOfSeats(4)
	freeSeats: number = 3;

	@checkAmountOfFuel
	isOpen(value: string) {
		return this.open ? "open" : `close ${value}`;
	}
}

function checkNumberOfSeats(limit: number) {
	return function (target: undefined, context: ClassFieldDecoratorContext) {
		return function (this: any, newAmount: number) {
			if (newAmount >= 1 && newAmount < limit) {
				return newAmount;
			} else {
				throw Error(`Больше ${limit} сидений быть не может, меньше 1 тоже`);
			}
		};
	};
}

function checkAmountOfFuel<T, A extends any[], R>(
	target: (this: T, ...args: A) => R,
	context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {
	return function (this: T, ...args: A): R {
		// console.log(this.fuel);
		console.log(`${String(context.name)} был запущен`);
		return target.apply(this, args);
	};
}

function changeDoorStatus(status: boolean) {
	console.log("door init");
	return <T extends { new (...args: any[]): {} }>(
		target: T,
		context: ClassDecoratorContext<T>
	) => {
		console.log("door changed");
		return class extends target {
			open = status;
		};
	};
}

function changeAmountOfFuel(amount: number) {
	console.log("fuel init");
	return <T extends { new (...args: any[]): {} }>(
		target: T,
		context: ClassDecoratorContext<T>
	) => {
		console.log("fuel changed");
		return class extends target {
			fuel = `${amount}%`;
		};
	};
}

const car = new myCar();
car.freeSeats = -1;
console.log(car);
console.log(car.errors);

// f(x(y()));
