const http = require('http');
const fs = require('fs');
const path = require('path');

const _PORT = 777;
const _HOST = '127.0.0.1';


// Routes
const { public, home, search, notFound } = require('./routes');

// render
const render = require('./lib/render');
http.ServerResponse.prototype.render = render;

http.createServer((req, res) => {
	if(req.url.match(/\.(html|css|js|png)$/)) { // маршрут для статических файлов
		
		public(req, res);

	} else if(req.url === '/') { // маршрут для главной страницы
		
		home(req, res);

	} else if(req.url.startsWith('/search')) { // маршрут для страницы поиска

		search(req, res);

	} else { // маршрут для всего остального
		notFound(req, res);
	}
}).listen(_PORT, _HOST, () => console.log(`Сервер запущен ${_HOST}:${_PORT}`));