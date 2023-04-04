const jsonTest = '{"name": "Test", "data": 4}';

const objFromJson = JSON.parse(jsonTest);

let toDoList: ToDo[] = [];

interface ToDo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then((response) => response.json())
// 	.then((json) => {
// 		if ('id' in json) {
// 			toDoList.push(json);
// 		}
// 		console.log(toDoList);
// 	});


fetch('https://jsonplaceholder.typicode.com/todos')
	.then((response) => response.json())
	.then((json) => {
		if ('id' in json && 'userId'  in json) {
			toDoList.push(json);
		} else if(Array.isArray(json)) {
			toDoList = json;
		} else {
			console.log(`${json} - is a string`);
		}
		console.log(toDoList);
	});


const promise = new Promise<string>((resolve, reject) => {
	resolve('Test');
})

promise.then(value => {
	console.log(value.toLocaleLowerCase());
})

