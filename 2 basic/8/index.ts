const isBirthdayData: boolean = true;
let userNameData: string = "Vasya";
let ageData: number;

ageData = 31;

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {  // :void - ничего не возвращает
//     if (isBirthday) {
//         return `Congrats ${userName.toUpperCase()}, age: ${age +1}`;
//     } else {
//         return 'Error';
//     }

// }

// стрелочная
const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age +1}`;
    } else {
        return 'Error';
    }

}

logBrtMsg(isBirthdayData, userNameData, ageData);