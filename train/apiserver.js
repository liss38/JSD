const http = require('http');
const fs = require('fs');
const path = require('path');

const _PORT = 777;
const _HOST = '127.0.0.1';

const todos = require('../set5/data/todos');

http.createServer((req, res) => {
	const route = req.url;
	
	if(route === '/todos') {
		res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
		res.end(JSON.stringify(todos));

	} else if(route === '/todos/completed') {
		const completed = todos.filter((todo) => todo.completed);
		res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
		res.end(JSON.stringify(completed));

	} else if(route.match(/\/todos\/\d+/)) {
		const id = parseInt(route.replace(/\D+/, ''));
		const todo = todos.find((todo) => todo.id === id);
		
		if(!todo) {
			res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end('такой todo нет в списке');
		} else {
			res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
			res.end(JSON.stringify(todo));
		}

	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
		res.end('404 OOOPSIE');
	}

	
}).listen(_PORT, _HOST, () => console.log(`Сервер запущен ${_HOST}:${_PORT}`));