const isBirthdayData: boolean = true;
let userNameData: string = "Vasya";
let ageData: number = 31;

const createError = (msg: string) => {      // never - функция закончится без возвращения значения
    throw new Error(msg);
    /*while (true) {              // бесконечный цикл, функция будет иметь тип never

    }*/
}

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
    if (isBirthday === true) {
        return `Congrats ${userName.toUpperCase()}, age: ${age +1}`;
    } else if (isBirthday === false) {
        return 'Too bad';
    }
    return createError('Errorььь');
}


logBrtMsg(isBirthdayData, userNameData, ageData);

// const smth: never = null;