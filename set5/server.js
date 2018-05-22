const http = require('http');

const html = `
	<!DOCTYPE html>
	<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<title>Основы Node.js</title>
		<link rel="stylesheet" href="app.css">
	</head>
	<body>
		<h1>Основы Node.js!</h1>

		<button>Нажми на меня</button>

		<script src="app.js"></script>
	</body>
</html>
`;
const css = `
	html,
	body {
		margin: 0;
		padding: 0;
		text-align: center;
	}

	h1 {
		margin-top: 0;
		padding: .5em;
		background-color: #026e00;
		font-family: "Consolas";
		color: #fff;
	}
`;
const js = `
	const button = document.querySelector('button');
	button.addEventListener('click', (evt) => alert('Node.js в действии!'));
`;

http.createServer((req, res) => {
	// console.log(req.url);
	// console.log(req.headers);
	// console.log(req.method);

	switch(req.url) {
		case '/': 
			res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
			res.end(html);
			break;

		case '/app.css': 
			res.writeHead(200, { 'Content-Type': 'text/css' });
			res.end(css);
			break;

		case '/app.js': 
			res.writeHead(200, { 'Content-Type': 'text/javascript' });
			res.end(js);
			break;

		default:
			res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8' });
			res.end('404');
	}

	
}).listen(3000, '127.0.0.1', () => console.log('Сервер запущен'));