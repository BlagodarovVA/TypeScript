"use strict";
class Box {
    width;
    height;
    volume;
    content;
    constructor(width, volume, content) {
        this.width = width;
        this.volume = volume;
        this.content = content;
        this.height = 500;
    }
    calculateVolume() {
        if (!this.volume) {
            this.volume = this.width * this.height;
            console.log(`Объём посылки ${this.volume}`);
        }
        else {
            console.log(`Объём посылки ${this.volume}`);
        }
    }
    checkBoxSize(transport) {
        if (typeof transport === 'number') {
            return transport >= this.width ? 'Ok' : 'Not ok';
        }
        else {
            return transport.some(t => t >= this.width) ? 'Ok' : 'Not ok';
        }
    }
    get boxContent() {
        return this.content;
    }
    set boxContent(value) {
        this.content = value;
    }
}
const firstBox = new Box(250);
firstBox.volume = 50000;
console.log(firstBox.boxContent = 'Test');
console.log(firstBox.boxContent);
// class User {
// 	name: string;
// }
// const ivan = new User();
// ivan.name = 'Ivan';
// console.log(ivan);
