// let smth: unknown;

// smth = 'str';

// let data: string[] = smth;
// data.find(e => e);


// // const someValue: any = 10;
// // someValue.method();		// будет ошибка

// const someValue: unknown = 10;
// someValue.method();


function fetchData(data: unknown): void {
	if (typeof data === 'string') {
		console.log(data.toLowerCase());
	}
	if (typeof data === 'number') {
		console.log(data.toFixed(2));
	}
}


const userData = '{"isBirthdayData": true, "ageData": 30, "userNameData": "John"}';

function safeParse(s: string): unknown {
	return JSON.parse(s);
}

const data1 = safeParse(userData);

function transferData(d: unknown): void {
	if (typeof d === 'string') {
		console.log(d.toLowerCase());
	} else if (typeof d === 'object' && d) {		// null - это также object
		console.log(d);
	} else {
		console.error('не тот Тип');
	}
}

transferData(data1);


try {
	if (1) {
		throw new Error('error');
	}
} catch (e) {
	if (e instanceof Error) {
		console.log(e.message);
	} else if (typeof e === 'string') {
		console.log(e);
	}
	
}

// Если тип unknown используется в union, то он перекроет все, кроме типа any
type T0 = any | unknown;		// any
type T1 = number | unknown;		// unknown

// В пересечении тип unknown перекрывается любым типом
type T2 = any & unknown;		// any
type T3 = number & unknown;		// number