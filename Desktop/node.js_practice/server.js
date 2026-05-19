const http = require('http');
const hello= require('./hello.js')

http.createServer((req, res) => {
res.write('this is my first server.')
res.write (hello('Eira'))
res.end();
}).listen(3004, () => {
	console.log('server is running on http://localhost:3004')
})
