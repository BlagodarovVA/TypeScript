// const isBirthdayData: boolean = true;
// let userNameData: string = "Vasya";
// let ageData: number;

let salary: number;
salary = 5000;

const userData = '{"isBirthdayData": true, "ageData": 30, "userNameData": "John"}';

const userObj: {    // аннотация объекта
    isBirthdayData: boolean;
    userNameData: string;
    ageData: number;
} = JSON.parse(userData);
console.log(userObj);

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {  // :void - ничего не возвращает
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age +1}`;
    } else {
        return 'Error';
    }

}


logBrtMsg(userObj.isBirthdayData, userObj.userNameData, userObj.ageData);