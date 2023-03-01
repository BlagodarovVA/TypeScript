interface User {
	login: string;
	password: string;
	age?: number;				// необязательное свойство
	addr: string | undefined;	// поле обязательно, но может быть undefined
	parents?: {
		mother?: string;
		father?: string;
	}
}

const user: User = {
	login: 'Vasya',
	password: 'QAZwsx',
	addr: undefined
}


let dbName: string;
sendUserData(user, 'ewrtwerdsf');

console.log(dbName!);	// ! означает, что оператор не null

function sendUserData(obj: User, db?: string): void {		// аргумент db не обязателен
	dbName = '12345';
	// ! после свойства отключает его проверку тайпскриптом, 
	// когда мы лучше знаем, что свойство будет не null и не undefined
	console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase());
}

