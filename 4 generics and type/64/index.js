"use strict";
const jsonTest = '{"name": "Test", "data": 4}';
const objFromJson = JSON.parse(jsonTest);
let toDoList = [];
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
    if ('id' in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    else {
        console.log(`${json} - is a string`);
    }
    console.log(toDoList);
});
