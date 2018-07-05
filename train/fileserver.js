const http = require('http');
const fs = require('fs');
const path = require('path');

const _PORT = 7777;
const _HOST = '127.0.0.1';

const _STATIC = path.join('..', 'set5', 'public');

function handleError(error, res) {
	res.writeHead(500, { 'Content-Type': 'text/plain' });
	res.end(error);
}

http.createServer((req, res) => {
	const url = req.url;

	console.log(url);
	if(url === '/') {
		const stream = fs.createReadStream(path.join(_STATIC, 'index.html'), 'utf-8');
		stream.on('error', (error) => handleError(error, res));
		res.writeHead(200, { 'Content-Type': 'text/html' });
		stream.pipe(res);

	} else if(url.match(/.css$/)) {
		const stream = fs.createReadStream(path.join(_STATIC, url));
		stream.on('error', (error) => handleError(error, res));
		res.writeHead(200, { 'Content-Type': 'text/css' });
		stream.pipe(res);

	} else if(url.match(/.js$/)) {
		const stream = fs.createReadStream(path.join(_STATIC, url));
		stream.on('error', (error) => handleError(error, res));
		res.writeHead(200, { 'Content-Type': 'text/javascript' });
		stream.pipe(res);

	} /*else if(url.match(/.svg$/)) {
		const stream = fs.createReadStream(path.join(_STATIC), url);
		stream.on('error', (error) => handleError(error, res));
		res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
		stream.pipe(res);

	}*/ else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('404 Not found');
	}
}).listen(_PORT, _HOST, () => console.log(`Сервер запущен ${_HOST}:${_PORT}`));