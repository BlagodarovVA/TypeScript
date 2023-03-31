// SomeType extends OtherType ? TrueType : FalseType;
// прверяем что 1 наследуется от 2
type Example = 'string' extends 'Hello' ? string : number;	// условный тип
const str: string = 'Hello'
type Example1 = 'string' extends typeof str ? string : number;	// условный тип

type FromUserOrFromBase<T extends string | number> = T extends string 
	? IDataFromUser 
	: IDataFromBase;

interface User<T extends 'created' | Date> {
	created: T extends 'created' ? 'created' : Date
}

const user: User<'created'> = {
	created: 'created',
}

interface IDataFromUser {
	weight: string;
}

interface IDataFromBase {
	calories: number;
}

function calculateDailuCalories(str: string): IDataFromUser;
function calculateDailuCalories(num: number): IDataFromBase;
function calculateDailuCalories<T extends string | number>(
	numOrStr: T
): T extends string ? IDataFromUser : IDataFromBase {
	if (typeof numOrStr === 'string') {
		const obj: IDataFromUser = {
			weight: numOrStr,
		};
		return obj as FromUserOrFromBase<T>;
	} else {
		const obj: IDataFromBase = {
			calories: numOrStr,
		};
		return obj as FromUserOrFromBase<T>;		
	}
}

// при первом условии false делавем второе условие
type GetStringType<T extends 'hello' | 'word' | string> = 
	T extends 'hello' ? 'hello' : 
	T extends 'word' ? 'word' : string;

// infer вытаскиевает тип из сущности
type GetFirstType<T> = T extends Array<infer First> ? First : T;

type Ex = GetFirstType<number[]>

// принимает любой тип и возвращает массив этого типа
type ToArray<Type> = Type extends any ? Type[] : never;

type ExArr = ToArray<Ex | string>;
