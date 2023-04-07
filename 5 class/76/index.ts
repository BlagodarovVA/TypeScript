function setName() {
	return 'COD';
}

class Player {
	static game: string = 'MassEffect';

	#login: string;
	private _password: string;
	public server: string;
	protected consent: boolean;

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
}


new Player();
console.log(Player.getGameName());

// console.log(Math.PI * 10 * 10);


// class Competitiveplayer extends Player {
// 	isConsented() {
// 		this.consent ? 'Yes' : 'No';
// 	}
// }


// const player = new Competitiveplayer();
// player.password = 'sdsa3';
