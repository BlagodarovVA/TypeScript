let num: Number = new Number(5);
let num1: number = 5;
let num3 = Number(5);

console.log(num == num1);
console.log(num === num1);

// num = num1;		// ok
// num1 = num;		// а Number не приводится к number


const num5 = 5;
const strNum: string = num.toString();
const str = '5';
const numStr: number = +str;


interface Department {
	name: string,
	budget: number
}

const departnment: Department = {
	name: 'backend',
	budget: 50000
}

interface Project {
	name: string,
	projectBudget: number
}

function transformDepartment (dept: Department, amount: number): Project {
	return {
		name: departnment.name,
		projectBudget:amount
	}
}

const mainProject: Project = transformDepartment(departnment, 4000);