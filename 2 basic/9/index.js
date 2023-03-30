"use strict";
// const isBirthdayData: boolean = true;
// let userNameData: string = "Vasya";
// let ageData: number;
let salary;
salary = 5000;
const userData = '{"isBirthdayData": true, "ageData": 30, "userNameData": "John"}';
const userObj = JSON.parse(userData);
console.log(userObj);
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    }
    else {
        return 'Error';
    }
}
logBrtMsg(userObj.isBirthdayData, userObj.userNameData, userObj.ageData);
