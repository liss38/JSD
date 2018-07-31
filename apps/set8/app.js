/*const express = require('express');
const morgan = require('morgan');
const todos = require('./todos');

const app = express();
const _HOST = '127.0.0.1';
const _PORT = 777;

app.set('view engine', 'pug');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Express @TODO',
		todos
	});
});

app.get('/todos', (req, res) => {
	if(req.query.completed) {
		return res.send(todos.filter(todo => todo.completed.toString() === req.query.completed));
	}

	res.json(todos);
});

app.get('/todos/:id', (req, res) => {
	let todo = todos.find(todo => todo.id == req.params.id);

	if(!todo) {
		return res.status(404).send('Не найдено');
	}

	res.json(todo);
});

app.listen(_PORT, () => console.log(`Сервер запущен на ${_HOST}:${_PORT}`))*/