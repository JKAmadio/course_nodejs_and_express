// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const john = 'john';
const peter = 'peter';

const sayHi = (name) => {
	console.log(`Hello there ${name}`);
}

const calcAge = (name, birthYear) => {
	let age = 2021 - birthYear;
	console.log(`${name}'s age is ${age}`);
}

sayHi('susan');
calcAge('susan', 1989);
sayHi(john);
calcAge(john, 1994);
sayHi(peter);
calcAge(peter, 1954);
