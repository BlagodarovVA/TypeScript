// string | number | boolean | string[]
// заглушка Т заменяется во время вызова, интерпретируется как какой-то тип и подставляется
function processingData<T>(data: T): T {
    //...

    return data;
}

const res1 = processingData(1);
let res2 = processingData('1');

const res3 = processingData<number>(10);


interface PrintUK {
    design: number;
}

interface PrintES {
    design: string;
}

// упрощаем верхние 2 в 1
interface Print<T1> {
    design: T1;          // заглущка позволит использовать любой тип
}

const somePrint: Print<string> = {      // использование интерфейса
    design: 'ten'
}

const someOtherPrint: Print<number> = {      // использование интерфейса
    design: 10
}


Array<T2>   // простые дженерики

ReferalSystem<UserID, UserReferrals>    // сложные, чтобы было понятно, для чего они