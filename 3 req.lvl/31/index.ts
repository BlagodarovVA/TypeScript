const TOP = 'Top';
const RIGHT = 'Right';

enum Directions {		// перечисление
	TOP,
	RIGHT,
	LEFT,
	BOTTOM
}

// если объявлять через const, то в выходном JS энама не будет,
// места где он использовался, будут заменены значениями.
// это увеличит скорость работы. Но пока это работает НЕ СТАБИЛЬНО
const enum TimingFunc {			// числовой энам - можно рассчитать значение
	EASE = 1,
	EASE_IN = 10,
	LINEAR = EASE * 2,
}
// enum TimingFunc {		// строковый энам
// 	EASE = 'ease',
// 	EASE_IN = 'ease-in',
// 	LINEAR = 'linear',
// }

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
	if (dir === Directions.RIGHT) {
		console.log(tFunc);
	}
}

frame('id', Directions.RIGHT, TimingFunc.EASE_IN);
