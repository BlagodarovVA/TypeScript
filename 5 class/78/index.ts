interface IEngine {
	model: string;
	capacity: number;
	startEngine: (time: Date) => string;
}

abstract class AbstractVehicle {
	model: string;
	capacity: number;
	abstract startEngine: (time: Date) => string;
	stopEngine(time: Date): string {
		this.startEngine(new Date());		// метод этого класса внутри метода этого класса
		return 'Engine Stopped';
	}
}

class Vehicle extends AbstractVehicle {
	startEngine = (time: Date) => {
		return `Started at ${time}`;
	};
}

