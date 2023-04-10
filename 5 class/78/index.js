"use strict";
class AbstractVehicle {
    model;
    capacity;
    stopEngine(time) {
        this.startEngine(new Date()); // метод этого класса внутри метода этого класса
        return 'Engine Stopped';
    }
}
class Vehicle extends AbstractVehicle {
    startEngine = (time) => {
        return `Started at ${time}`;
    };
}
