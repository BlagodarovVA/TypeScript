function setName() {
	return 'COD';
}

class Player {
	static game: string = 'MassEffect';

	#login: string;
	private _password: string;
	public server: string;
	protected consent: boolean;

	constructor(login: string) {
		this.#login = login;
	}

	static {						// статичный блок
		Player.game = setName();
	}

	get password() {
		return this._password;
	}

	set password(newPass: string) {
		// validation
		this._password = newPass;
	}

	static getGameName() {
		return Player.game;
	}

	// logIn(this: Player)  {			// this всегда будет Player
	// 	return `Player ${this.#login} online!`;
	// }
	logIn = () => {						// аналогично тому, что выше
		return `Player ${this.#login} online!`;
	}

	connect() {
		// do smth
		return this;
	}

	isPro(): this is CompetitivePlayer {
		return this instanceof CompetitivePlayer;	// возврат логического значения
	}
}


// const test = player.logIn;						// ссылка на функцию теряет контекст
// //const test = player.logIn.bind(player);		// жесткая привязка, не теряется контекст
// test();


console.log('PI - ',Math.PI);


class CompetitivePlayer extends Player {
	rank: number;
	
	checkLogin() {
		return this.logIn();
	}
}

const player = new Player('test');
console.log(player.connect().logIn());

const player2 = new CompetitivePlayer('Test2');
console.log(player2.connect().logIn());

const somePlayer: Player | CompetitivePlayer = new CompetitivePlayer('Test3');
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);
