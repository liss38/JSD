const fs = require('fs');
const path = require('path');

function public(req, res) {
	/*
		1. определить расширение запрашиваемого файла

		2. определить тип контента

		3. прочитать файл с диска

		4. отправить его клиенту
	*/

	const extension = path.extname(req.url); // -> '.css'
	const filename = req.url.slice(1);
	let contentType = '';

	switch(extension) {
		case '.html':
			contentType = 'text/html';
			break;

		case '.css':
			contentType = 'text/css';
			break;

		case '.js':
			contentType = 'text/javascript';
			break;

		case '.png':
			contentType = 'image/png';
			break;

		default: 
			contentType = 'text/plain';
	}

	res.statusCode = 200;
	res.setHeader('Content-Type', contentType);

	// const assetPath = path.join(__dirname, '..', 'public', req.url);
	const assetPath = path.resolve('public', filename);

	const stream = fs.createReadStream(assetPath);
	
	stream.pipe(res);
	
	stream.on('error', (error) => {
		if(error.code === 'ENOENT') {
			res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end('404 not found');
		} else {
			res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end(error.message);
		}
	});
}

module.exports = public;