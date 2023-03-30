"use strict";
const isBirthdayData = true;
let userNameData = "Vasya";
let ageData = 31;
const createError = (msg) => {
    throw new Error(msg);
};
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday === true) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    }
    else if (isBirthday === false) {
        return 'Too bad';
    }
    return createError('Errorььь');
}
logBrtMsg(isBirthdayData, userNameData, ageData);
