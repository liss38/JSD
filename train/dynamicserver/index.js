const http = require('http');
const fs = require('fs');
const path = require('path');

const _PORT = 777;
const _HOST = '127.0.0.1';

const viewsPath = path.join(__dirname, 'views');
const views = {
	'form': path.join(viewsPath, 'form.view'),
	'post': path.join(viewsPath, 'post.view'),
};

function parseBody(body) {
	let result = {};
	const keyValuePairs = body.split('&');

	keyValuePairs.forEach( (item) => {
		const [key, value] = item.split('=');
		result[key] = value;
	} );

	return result;
}

function render(template, data, done) {
	fs.readFile(views[template], 'utf-8', (err, file) => {
		if(err) return done(err);

		let html = file;

		for(prop in data) {
			let hotReplace = new RegExp(`{${prop}}`, 'g');
			html = html.replace(hotReplace, data[prop]);
		}

		done(null, html);
	});
}

http.createServer((req, res) => {
	switch(req.method) {
		case 'GET':
			const stream = fs.createReadStream(views['form']);
			// stream.on('error', (error) => handleError(error));
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			stream.pipe(res);
			break;

		case 'POST':
			let payload = '';
			req.on('data', (data) => payload += data );
			req.on('end', () => {
				const data = parseBody(payload);

				render('post', data, (error, html) => {
					if(error) {
						res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
						return res.end(error.message);
					}

					res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
					res.end(html);
				});
			});
			console.log(`POST`);
			break;
	}

	// res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	// res.end('Запустился');
}).listen(_PORT, _HOST, () => console.log(`Сервер запущен:   ${_HOST}:${_PORT}`) );