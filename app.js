// GLOBALS - NO WINDOWS

// __dirname	- path to current directory
// __filename	- file name
// require		- function to use modules (Common JS)
// module		- info about current module (file)
// process		- info about env where the program is being executed

console.log("__dirname");
console.log(__dirname);
console.log('\n\n\n\n///////////////////-------------------------/////////////////////\n\n\n\n\n');
console.log("__filename");
console.log(__filename);
console.log('\n\n\n\n///////////////////-------------------------/////////////////////\n\n\n\n\n');
console.log("require");
console.log(require);
console.log('\n\n\n\n///////////////////-------------------------/////////////////////\n\n\n\n\n');
console.log("module");
console.log(module);
console.log('\n\n\n\n///////////////////-------------------------/////////////////////\n\n\n\n\n');
console.log("process");
console.log(process);
console.log('\n\n\n\n///////////////////-------------------------/////////////////////\n\n\n\n\n');

setInterval(() => {
	console.log('hello');
}, 1000);