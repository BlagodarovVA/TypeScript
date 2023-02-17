const test: null = null;
const test2: any = null;
const test3: string = null;     // ok
const test4: number = null;     // ok

const test5: undefined = undefined;
const test6: any = undefined;

let smth;                       // any

function getRandomData() {
    if (Math.random() < 0.5) {
        return null;
    } else {
        return '  Some data    ';
    }
}

const data = getRandomData();
const trimedData = data?.trim();
