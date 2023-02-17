// const isBirthdayData: boolean = true;
// let userNameData: string = "Vasya";
// let ageData: number = 31;

const userData = {
    isBirthdayData: true,
    userNameData: "Vasya",
    ageData: 31,
    messages: {
        error: 'Error'
    }
}

const createError = (msg: string) => {
    throw new Error(msg);
};

function logBrtMsg({isBirthdayData, userNameData, ageData, messages: {error}}: {    // деструктуризация
    isBirthdayData: boolean,
    userNameData: string,
    ageData: number,
    messages: {error: string}
}): string {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error);
    }
}

console.log(logBrtMsg(userData));


const departments: string[] = ['dev', 'design', 'dit'];     // массив строк

const dept = departments[0];                                // строка

// departments.push(5);
const report = departments
                        .filter((d: string) => d !== 'dev')
                        .map((d: string) => `${d} - done`);

console.log(report);

const nums: number[][] = [      // массив массивов
    [3, 5, 7], 
    [1, 3, 4]
];


const [first] = report;
console.log(first);

