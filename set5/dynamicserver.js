const http = require('http');
const fs = require('fs');
const path = require('path');

const _PORT = 3000;


function parseBody(body) {
	const result = {};
	const keyValuePairs = body.split('&');

	keyValuePairs.forEach(keyValue => {
		const [key, value] = keyValue.split('=');
		result[key] = value;
	});

	return result;
}

function render(template, data, done) {
	fs.readFile(path.join(__dirname, 'views', `${template}.view`), 'utf-8', (err, file) => {
		if(err) return done(err);

		let html = file;

		for(let prop in data) {
			const regex = new RegExp(`{${prop}}`, 'g');
			html = html.replace(regex, data[prop]);
		}

		done(null, html);
	});
}


http.createServer((req, res) => {
	switch(req.method) {
		case 'GET':
			const stream = fs.createReadStream(path.join(__dirname, 'views', 'form.view'));
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
			stream.pipe(res);
			break;
		case 'POST':
			let body = ''
			
			req.on('data', data => body += data);
			req.on('end', () => {
				const data = parseBody(body);
				
				render('post', data, (err, html) => {
					if(err) {
						res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
						return res.end(err.message);
					}

					res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
					res.end(html);
				});
			});
			break;
	}
}).listen(_PORT, () => console.log(`${__filename.replace(__dirname, '')} запущен на ${_PORT}`))