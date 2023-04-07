class Player {
	private login: string;
	private _password: string;
	public server: string;
	protected consent: boolean;

	get password() {
		return this._password;
	}

	set password(newPass: string) {
		// validation
		this._password = newPass;
	}
}

class Competitiveplayer extends Player {

	isConsented() {
		this.consent ? 'Yes' : 'No';
	}

}


const player = new Player();
player.password = 'sdsa3';
//player._password = 'sdsa3';	// приватное, будет ошибка



// class User {
// 	public email: string;
// 	public name: string;

// 	constructor(email: string, name: string) {
// 		this.email = email;
// 		this.name = name;
// 	}
// }

// // аналогично классу выше
// class User1 {
// 	constructor(public email: string, public nmae: string) {}
// }