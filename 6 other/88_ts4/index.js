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
    isOpen(value) {
        return this.open ? 'open' : `close ${value}`;
    }
};
__decorate([
    checkNumberOfSeats(4)
], myCar.prototype, "freeSeats", void 0);
__decorate([
    checkAmountOfFuel
], myCar.prototype, "isOpen", null);
myCar = __decorate([
    changeDoorStatus(false),
    changeAmountOfFuel(95)
], myCar);
function checkNumberOfSeats(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newAmount) {
            console.log('Setter');
            console.log('limit - ', limit);
            console.log('newAmount - ', newAmount);
            if (newAmount >= 1 && newAmount < limit) {
                value = newAmount;
            }
            else {
                console.log(`Больше ${limit} сидений быть не может`);
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
function checkAmountOfFuel(target, propertyKey, descriptor) {
    const oldValue = descriptor.value;
    descriptor.value = function (...args) {
        console.log(this.fuel);
        return oldValue.apply(this, args);
        // return this.open ? 'open' : 'close';	
    };
}
function changeDoorStatus(status) {
    // console.log('door init');
    return (constructor) => {
        // console.log('door changed');
        return class extends constructor {
            open = status;
        };
    };
}
function changeAmountOfFuel(amount) {
    // console.log('fuel init');
    return (constructor) => {
        // console.log('fuel changed');
        return class extends constructor {
            fuel = `${amount}%`;
        };
    };
}
const car = new myCar();
car.freeSeats = 5;
console.log(car); // модифицируем объект и выполняем на нем метод
