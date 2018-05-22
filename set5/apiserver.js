const http = require('http');
const todos = require('./data/todos');

const _PORT = 3000;

http.createServer((req, res) => {
	if(req.url === '/todos') {
		res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});
		res.end(JSON.stringify(todos));
	} else if(req.url === '/todos/completed') {
		const completed = todos.filter(todo => todo.completed);

		res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});
		res.end(JSON.stringify(completed));
	} else if(req.url.match(/\/todos\/\d+/)) {
		const id = parseInt(req.url.replace(/\D+/, ''));
		const todo = todos[id];

		if(!todo) {
			res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end('Нет такой задачи');
		} else {
			res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
			res.end(JSON.stringify(todo));
		}		
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
		res.end('404 Не найдено');
	}
	
}).listen(_PORT, () => console.log(`Сервер запущен на ${_PORT}`));