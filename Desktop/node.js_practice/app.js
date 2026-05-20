const http = require('http');
http.createServer((req, res) => {
	res.write('<h1>This is my first server</h1>')
	res.end();

}).listen(4000, () => {
	console.log('the server is running on http://localhost:4000')
})
//we also can make another server with different port in same file