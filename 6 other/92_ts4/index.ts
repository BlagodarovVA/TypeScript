import "reflect-metadata";
const limitMetadataKey = Symbol('limit');

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
	errors: any;

	@checkNumberOfSeats(5)
	freeSeats: number;

	@checkAmountOfFuel
	isOpen(value: string) {
		return this.open ? 'open' : `close ${value}`;
	}

	@validate
	startTravel(@limit passengers: number) {
		console.log(`Start width ${passengers} passengers`);
	}
}

function limit(
	target: Object,
	propertyKey: string | symbol,
	parameterIndex: number
) {
	// console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
	// console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
	// console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));

	let limitedParameters: number[] = 
		Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
	limitedParameters.push(parameterIndex);
	Reflect.defineMetadata(
		limitMetadataKey, 
		limitedParameters, 
		target, 
		propertyKey
	);
}



function log(	
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
) : PropertyDescriptor | void {
	const oldValue = descriptor.set;
	const oldGet = descriptor.get;
	descriptor.set = function(this: any, ...args: any) {
		console.log(`Изменяем значение на ${[...args]}`);
		return oldValue?.apply(this, args);
	};
	descriptor.get = function() {
		console.log('Test');
		return oldGet?.apply(this);
	};
}

function validate(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
) {
	let method = descriptor.value;

	descriptor.value = function (...args: any) {
		let limitedParameters: number[] = 
			Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey);

		if (limitedParameters) {
			for (let index of limitedParameters) {
				if (args[index] > 5) {
					throw new Error('Нельзя больше 5 пассажиров');
				}
			}
		}
		return method?.apply(this, args);
	}
}

function checkNumberOfSeats(limit: number) {
	return function (target: Object, propertyKey: string | symbol) {
		let symbol = Symbol();

		const getter = function(this: any) {
			return this[symbol];
		}

		const setter = function (this: any, newAmount: number) {
			if (newAmount >= 1 && newAmount < limit) {
				this[symbol] = newAmount + 1;
			} else {
				//console.log(`Больше ${limit} сидений быть не может`);
				Object.defineProperty(target, 'errors', {
					value: (`Больше ${limit} сидений быть не может`)
				})
			}
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter
		});
	};
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
car.startTravel(5);
//console.log(car);		

