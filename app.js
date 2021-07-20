const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf-8', (err, result) => {
	if(err){
		console.log(err);
		return;
	}
	const first = result;
	console.log(first);

	readFile('./content/second.txt','utf-8', (err, result) => {
		if(err){
			console.log(err);
			return;
		}
		const second = result;
		console.log(second);

	writeFile('./content/result-async.txt',
		'Hello, this is our result file',
		(err, result) => {
			if(err) {
				console.log(err);
				return;
			}
			const write = result;
			console.log(write);
		}
	);

	writeFile('./content/result-async.txt',
		' from Async method',
		{ flag: 'a' },
		(err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			const append = result;
			console.log(append);
		}
	);

	})
})