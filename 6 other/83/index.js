"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let myCar = class myCar {
    fuel = '50%';
    open = true;
    freeSeats;
    isOpen() {
        console.log(this.fuel);
        return this.open ? 'open' : 'close';
    }
};
myCar = __decorate([
    closeCar // оборачиваем класс в функцию
], myCar);
function closeCar(constructor) {
    return class extends constructor {
        open = false;
    };
}
// function addFuel(car: myCar) {
// 	car.fuel = '100%';
// 	console.log('add fuel');
// 	return car;	
// }
const car = new myCar();
console.log(car.isOpen()); // модифицируем объект и выполняем на нем метод
