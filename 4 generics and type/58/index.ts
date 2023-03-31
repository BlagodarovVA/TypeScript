// работает для типов и интерфейсов
interface Currencies {
	usa: 'usd',
	china: 'cny',
	belarus: 'byn',
	germany: 'eur'
};

type CreateCustomCurr<T> = {
	[P in keyof T] : string
}

type CustomCurrencies = CreateCustomCurr<Currencies>;

type ROnlyCurr = Readonly<Currencies>;

// type CustomCurrencies = {
// 	usa: string,
// 	china: string,
// 	belarus: string,
// 	germany: string
// }

// type СопоставимыйТип = {
// 	[произвольныйИД in Множество] : ПроизвольныйТипДанных
// }

type Keys = 'name' | 'age' | 'role';

type User = {
	[K in Keys] : string
}

const alex: User = {
	name: 'Alex',
	age: '30',
	role: 'admin'
}