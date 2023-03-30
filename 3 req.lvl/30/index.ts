interface User {
	readonly login: string;		// только для чтения
	password: string;
	age?: number;				// необязательное свойство
	addr: string | undefined;	// поле обязательно, но может быть undefined
	readonly parents?: {
		mother?: string;
		father?: string;
	};
}

const user: User = {
	login: 'Vasya',
	password: 'QAZwsx',
	addr: undefined,
};

const userFreeze: Readonly<User> = {	// объект как User, но все свойства только для чтения
	login: 'Vasya',
	password: 'QAZwsx',
	addr: undefined,
}

user.login = 'login2';
user.password = 'newPass';


let dbName: string;
sendUserData(user, 'ewrtwerdsf');

console.log(dbName!);	// ! означает, что оператор не null

function sendUserData(obj: User, db?: string): void {		// аргумент db не обязателен
	dbName = '12345';
	// ! после свойства отключает его проверку тайпскриптом, 
	// когда мы лучше знаем, что свойство будет не null и не undefined
	console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase());
}


class Animal {
	readonly name: string = 'name';		// только для чтения
}


//const basicPorts: readonly number[] = [3000, 3001, 5000];
const basicPorts: ReadonlyArray<number> = [3000, 3001, 5000];
basicPorts[0] = 5;
basicPorts.push(566);

// const basicPorts1: readonly [number, ...string[]] = [3000, '3001', '5000'];
// basicPorts1[0] = 5;
// basicPorts1.push(566);