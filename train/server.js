/*const http = require('http');

const _PORT = 777;
const _HOST = 'localhost';

const server = http.createServer();

server.on('request', (req, res) => {
	console.log('URL', req.url);
	console.log('METHOD', req.method);
	console.log('HEADERS', req.headers);

	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	res.end('Сервер запущен');
});

server.listen(_PORT, _HOST, () => console.log(`Сервер запущен, ${_HOST}:${_PORT}`));*/


const http = require('http');

const _PORT = 777;
const _HOST = '127.0.0.1';

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	res.end('Сервер в четыре строки');
}).listen(_PORT, _HOST, () => console.log(`Сервер запущен   ${_HOST}:${_PORT}`));