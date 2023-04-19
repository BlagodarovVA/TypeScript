import "reflect-metadata";
const limitMetadataKey = Symbol("limit");

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
	test: any;

	constructor(@limit() test: number) {
		this.test = test;
	}

	@checkNumberOfSeats(4)
	freeSeats: number;

	// @checkAmountOfFuel()
	isOpen(value: string) {
		return this.open ? "open" : `close ${value}`;
	}

	@validate()
	startTravel(@limit() passengers: number) {
		console.log(`Started with ${passengers} passengers`);
	}
}

function limit() {
	console.log("Init: Parameter Decorator");
	return (
		target: Object,
		propertyKey: string | symbol,
		parameterIndex: number
	) => {
		console.log("Call: Parameter Decorator");
		let limitedParametrs: number[] =
			Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
		limitedParametrs.push(parameterIndex);
		Reflect.defineMetadata(
			limitMetadataKey,
			limitedParametrs,
			target,
			propertyKey
		);
	};
}

function validate() {
	console.log("Init: Method Decorator");
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		console.log("Call: Method Decorator");
		let method = descriptor.value;

		descriptor.value = function (...args: any) {
			let limitedParametrs: number[] = Reflect.getOwnMetadata(
				limitMetadataKey,
				target,
				propertyKey
			);

			if (limitedParametrs) {
				for (let index of limitedParametrs) {
					if (args[index] > 4) {
						throw new Error("Нельзя больше 4х пассажиров");
					}
				}
			}
			return method?.apply(this, args);
		};
	};
}

function checkNumberOfSeats(limit: number) {
	console.log("Init: Property Decorator");
	return function (target: Object, propertyKey: string | symbol) {
		console.log("Call: Property Decorator");
		let symbol = Symbol();

		const getter = function (this: any) {
			return this[symbol];
		};

		const setter = function (this: any, newAmount: number) {
			if (newAmount >= 1 && newAmount < limit) {
				this[symbol] = newAmount + 1;
			} else {
				// console.log(`Больше ${limit} сидений быть не может`);
				Object.defineProperty(target, "errors", {
					value: `Больше ${limit} сидений быть не может`,
				});
			}
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

function checkAmountOfFuel() {
	console.log("Init: Method Decorator");
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	): PropertyDescriptor | void => {
		console.log("Call: Method Decorator");
		const oldValue = descriptor.value;
		descriptor.value = function (this: any, ...args: any[]) {
			console.log(this.fuel);
			return oldValue.apply(this, args);
		};
	};
}

function changeDoorStatus(status: boolean) {
	console.log("Init: Class Decorator Door");
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		console.log("Call: Class Decorator Door");
		return class extends constructor {
			open = status;
		};
	};
}

function changeAmountOfFuel(amount: number) {
	console.log("Init: Class Decorator Fuel");
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		console.log("Call: Class Decorator Fuel");
		return class extends constructor {
			fuel = `${amount}%`;
		};
	};
}

const car = new myCar(3);
car.startTravel(3);
// console.log(car);

// f(x(y()));
