const message: string | number = 5;
const messages: string[] | number[] = ['a', 'b'];

// function printMsg(msg: string | number): void {
//     if (typeof msg === 'string') {                  // сужение типа
//         console.log(msg.toLowerCase());
//     } else {
//         console.log(msg.toExponential());
//     }

//     console.log(msg);                               // снова юнион тип
// }

function printMsg(msg: string[] | number): void {
    if (Array.isArray(msg)) {                  // сужение типа
        msg.forEach(m => console.log(m))
    } else if (typeof msg === 'number') {
        console.log(msg.toFixed());
    } else {
        console.log(msg);
    }

    console.log(msg);                               // снова юнион тип
}

printMsg(4);


const printreadings = (a: number | string, b: number | boolean) => {
    if (a === b) {
        console.log(a, b);          // сужение типа до number
    }
}


const printreadings2 = (a: number[] | string) => {
    console.log(a.slice(0, 3));
}


function checkReadings (readings: {system: number} | {user: number}): void {
    if ('system' in readings) {         // проверка, что свойство существует в объекте
        console.log(readings.system);
    } else {
        console.log(readings.user);
    }
}

function logValue(x: string | Date) {       // Date - тип в TS
    if (x instanceof Date) {
        console.log(x.getDate);
    } else {
        console.log(x.trim());
    }
}