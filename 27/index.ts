let a = 'string';
const salary = 500;		// без указания типа через const получаем литеральный тип (500)


interface UserData {
	isBirthdayData: boolean;
	ageData: number;
	userNameData: string;
}

const userData = '{"isBirthdayData": true, "ageData": 30, "userNameData": "John"}';

const arr = ['ssss', 5, true];

const userObj: UserData = JSON.parse(userData);
console.log(userObj.smt);


let isOkay = true;
let movement: boolean | string = false;

if (isOkay) {
	movement = 'moving';
}