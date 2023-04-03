interface Currencies {
	usa: 'usd',
	china: 'cny',
	belarus: 'byn',
	germany: 'eur'
};

type CreateCustomCurr<T> = {
	[P in keyof T as `custom${Capitalize<string & P>}`] : string
}

type CustomCurrencies = CreateCustomCurr<Currencies>;

type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'out';

type MyNEwAnimation = `${MyAnimation}${Capitalize<Direction>}`;