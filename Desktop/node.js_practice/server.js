const http = require('http');
function sayHello(name) {
    return name('asif', 'hamid');
}
function name(firstName, lastName) {
    return `hello ${firstName} ${lastName}`;
}

http.createServer((req, res) => {
res.write('this is my first server.')
res.write(sayHello(name));

res.end();
}).listen(3002, () => {
	console.log('server is running on http://localhost:3002')
})
