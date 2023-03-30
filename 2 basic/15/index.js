"use strict";
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
};
const createError = (msg) => {
    throw new Error(msg);
};
function logBrtMsg({ isBirthdayData, userNameData, ageData, messages: { error } }) {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    }
    else {
        return createError(error);
    }
}
console.log(logBrtMsg(userData));
