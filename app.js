const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first, second);

writeFileSync(
	'./content/result-sync.txt',
	'Hello, this is our result file',
);
const result = readFileSync('./content/result-sync.txt', 'utf-8');
console.log(result);

writeFileSync(
	'./content/result-sync.txt',
	' from Sync method',
	{ flag: 'a'} 
);
const append = readFileSync('./content/result-sync.txt', 'utf-8');
console.log(append);



