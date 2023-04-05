class Box {
	//width!: number;		// ! - задание свойства без инициализатора
	width: number;
	height: number;

	constructor(width: number) {
		this.width = width;
		this.height = 500;
	}
}

const firstBox = new Box(250);
console.log(firstBox);


class User {
	name: string;
}

const ivan = new User();
ivan.name = 'Ivan';
console.log(ivan);