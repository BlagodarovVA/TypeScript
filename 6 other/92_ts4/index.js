"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const limitMetadataKey = Symbol('limit');
let myCar = class myCar {
    constructor() {
        this.fuel = '50%';
        this.open = true;
    }
    isOpen(value) {
        return this.open ? 'open' : `close ${value}`;
    }
    startTravel(passengers) {
        console.log(`Start width ${passengers} passengers`);
    }
};
__decorate([
    checkNumberOfSeats(5),
    __metadata("design:type", Number)
], myCar.prototype, "freeSeats", void 0);
__decorate([
    checkAmountOfFuel,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], myCar.prototype, "isOpen", null);
__decorate([
    __param(0, limit),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], myCar.prototype, "startTravel", null);
myCar = __decorate([
    changeDoorStatus(false),
    changeAmountOfFuel(95)
], myCar);
function limit(target, propertyKey, parameterIndex) {
    console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
    console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
    console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
    let limitedParameters = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
    limitedParameters.push(parameterIndex);
    Reflect.defineMetadata(limitMetadataKey, limitedParameters, target, propertyKey);
}
function log(target, propertyKey, descriptor) {
    const oldValue = descriptor.set;
    const oldGet = descriptor.get;
    descriptor.set = function (...args) {
        console.log(`Изменяем значение на ${[...args]}`);
        return oldValue?.apply(this, args);
    };
    descriptor.get = function () {
        console.log('Test');
        return oldGet?.apply(this);
    };
}
function checkNumberOfSeats(limit) {
    return function (target, propertyKey) {
        let symbol = Symbol();
        const getter = function () {
            return this[symbol];
        };
        const setter = function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                this[symbol] = newAmount + 1;
            }
            else {
                //console.log(`Больше ${limit} сидений быть не может`);
                Object.defineProperty(target, 'errors', {
                    value: (`Больше ${limit} сидений быть не может`)
                });
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
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
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
function changeAmountOfFuel(amount) {
    // console.log('fuel init');
    return (constructor) => {
        // console.log('fuel changed');
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.fuel = `${amount}%`;
            }
        };
    };
}
const car = new myCar();
console.log(car);
