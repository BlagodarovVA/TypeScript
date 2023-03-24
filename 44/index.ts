type voidFunc = () => void;

const retString: voidFunc = () => {
	// ...
	return 'some string';
};

const s = retString();
console.log(s);

const retNum: voidFunc = () => {
	// ...
	return 5;
};

const n = retNum();
console.log(n);

function f2(): void {
	return true;		// нужно использовать тип стр. 1
}

const f3 = function () : void {
	return true;		// нужно использовать тип стр. 1	
}


const names = ['Anna', 'John'];
const newArr = names.slice();

names.forEach((name, i, arr) => arr.push('Hey!'));