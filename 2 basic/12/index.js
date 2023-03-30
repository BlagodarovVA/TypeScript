"use strict";
const test = null;
const test2 = null;
const test3 = null; // ok
const test4 = null; // ok
const test5 = undefined;
const test6 = undefined;
let smth; // any
function getRandomData() {
    if (Math.random() < 0.5) {
        return null;
    }
    else {
        return '  Some data    ';
    }
}
const data = getRandomData();
const trimedData = data === null || data === void 0 ? void 0 : data.trim();
