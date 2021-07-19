// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./names');
const functions = require('./utils');
require('./mind-grenade');

/*
functions.sayHi('susan');
functions.calculateAge('susan', 1989);
console.log('\n');
functions.sayHi(names.john);
functions.calculateAge(names.john, 1994);
console.log('\n');
functions.sayHi(names.peter);
functions.calculateAge(names.peter, 1954);
*/