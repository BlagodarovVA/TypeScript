const fetchData = (url: string, method: 'GET' | 'POST'): void => {
	console.log(method);
}

const reqOptions = {
	url: 'https://someurl.com',
	method: 'GET123'
	// method: 'GET' as 'GET'		// также утверждение типа
}

const reqOptions2 = {
	url: 'https://someurl.com',
	method: 'GET'
} as const;			// объектный литерал

const method = 'GET';

fetchData('qdd', 'GET');
// fetchData(reqOptions.url, reqOptions.method as 'GET');		// утверждение типа, TS не будет проверять тип
fetchData(reqOptions.url, <'GET'>reqOptions.method);			// альтернативное утверждение типа

const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input') as HTMLInputElement;

const someNumber: number = input.value as any as number;		// утверждаем тип как любой, затем как число. ЛУЧШЕ НЕ ИСПОЛЬЗОВАТЬ
console.log(someNumber);


let a = 'value' as const;
// то же самое 
// const a = 'value';

let b = {f: 100} as const;
let c = [] as const;

let value = 'value';
let arr = ['sf', 'sdfe'];
let obj = {f: 100};

// let T0 = value as const;		// ошибка, т.к. в значении переменная, а не экземпляр

let d = (Math.round(Math.random() * 2) ? 'yes' : 'no') as const;	// ошибка, т.к. не известне результат