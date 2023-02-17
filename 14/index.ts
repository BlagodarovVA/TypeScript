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


logBrtMsg(userData);



