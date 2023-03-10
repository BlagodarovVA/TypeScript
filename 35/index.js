"use strict";
const fetchData = (url, method) => {
    console.log(method);
};
const reqOptions = {
    url: 'https://someurl.com',
    method: 'GET123'
    // method: 'GET' as 'GET'		// также утверждение типа
};
const reqOptions2 = {
    url: 'https://someurl.com',
    method: 'GET'
}; // объектный литерал
const method = 'GET';
fetchData('qdd', 'GET');
// fetchData(reqOptions.url, reqOptions.method as 'GET');		// утверждение типа, TS не будет проверять тип
fetchData(reqOptions.url, reqOptions.method); // альтернативное утверждение типа
const box = document.querySelector('.box');
const input = document.querySelector('input');
const someNumber = +input.value;
console.log(someNumber);
