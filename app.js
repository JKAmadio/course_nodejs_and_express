const http = require('http');

// req = client request | res = server response
const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.end('Welcome to out home page');
	}
	if(req.url === '/about') {
		res.end('This is our short history');
	}
	else {
		res.end(`
			<h1>Ooops!</h1>
			<p>we can't seem to find the page you're looking for</p>
			<a href="/">Back Home</a>
		`);
	}
});

server.listen(5000);