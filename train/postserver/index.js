const http = require('http');
const fs = require('fs');
const path = require('path');

const _PORT = 777;
const _HOST = '127.0.0.1';

const router = require('./router');

function parseBody(body) {
	return body;
}

http.createServer((req, res) => {
	const route = req.url;
	const method = req.method;

	const payload = '';

	req.on('data', data => payload += data);
	req.on('end', () => router.router({ route, method, payload }, (page) => {
		// console.log(templatePage);

		if(page) {
			const response = page.response;
			const stream = page.stream;

			stream.on('error', (error) => console.log(error.message));
			res.writeHead(response.statusCode, response.headers);
			stream.pipe(res);
		} else {
			res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end('404 not found');
		}

	}));

	

}).listen(_PORT, _HOST, () => console.log(`Сервер запущен ${_HOST}:${_PORT}`));