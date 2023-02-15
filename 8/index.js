var userNameData = "Vasya";
var isBirthdayData = true;
var ageData;
ageData = 31;
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        console.log("Congrats ".concat(userName.toUpperCase(), ", age: ").concat(age + 1));
    }
}
logBrtMsg(isBirthdayData, userNameData, ageData);
