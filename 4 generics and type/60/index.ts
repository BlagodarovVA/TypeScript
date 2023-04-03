interface Currencies {
	usa: 'usd',
	china: 'cny',
	belarus: 'byn',
	germany: 'eur'
};

type CurrWithoutUSA = Omit<Currencies, 'usa'>;	// исключение
type CurrBELAndCHN = Pick<Currencies, 'belarus' | 'china'>;	// фильтрация по свойству
type CountriesWithoutUSA = Exclude<keyof Currencies, 'usa'>;


type FadeType = Exclude<MyAnimation, 'swipe'>;	// удаление из union типа
type SwipeType = Extract<MyAnimation, 'swipe'>;	// выбор подходящеего типа


type CreateCustomCurr<T> = {
	[P in keyof T as `custom${Capitalize<string & P>}`] : string
};

type PlayersNames = 'alex' | 'john';
type CustomCurrencies = CreateCustomCurr<Currencies>;
// задается объект с ключами такими и значениями вот такими
type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

const gameData: GameDataCurr = {
	alex: {
		customUsa: 'qweqwe',
		customChina: 'ssadf',
		customBelarus: 'zxcvv',
		customGermany: 'hjkljh'
	},
	john: {
		customUsa: 'qweqwe',
		customChina: 'ssadf',
		customBelarus: 'zxcvv',
		customGermany: 'hjkljh'		
	}
}


type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'out';

type MyNEwAnimation = `${MyAnimation}${Capitalize<Direction>}`;