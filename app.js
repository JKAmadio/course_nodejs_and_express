// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./names');
const sayHi = require('./sayHi');
const calculateAge = require('./calculateAge');

sayHi('susan');
calculateAge('susan', 1989);
console.log('\n');
sayHi(names.john);
calculateAge(names.john, 1994);
console.log('\n');
sayHi(names.peter);
calculateAge(names.peter, 1954);
