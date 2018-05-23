const http = require('http');
const fs = require('fs');
const path = require('path');

const _PORT = 3000;

function parseBody(body) {
	// username=dsfd&password=dfsd
	const result = {};
	const keyValuePairs = body.split('&');

	keyValuePairs.forEach(keyValue => {
		const [key, value] = keyValue.split('=')

		result[key] = value;
	});

	return result;
}

http.createServer((req, res) => {
	console.log(req.method);
	switch(req.method) {
		case 'GET':
			const stream = fs.createReadStream(path.join(__dirname, 'public', 'form.html'));
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			stream.pipe(res);
			break;
		case 'POST':
			let body = '';

			req.setEncoding('utf-8');
			req.on('data', data => body += data);
			req.on('end', () => {
				const data = parseBody(body);
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify(data));
			});
			break;
	}
	// res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	// res.end('OK');
}).listen(_PORT, () => console.log(`Сервер поднят на ${_PORT}`));

// console.log(parseBody('username=dsfd&password=dfsd'));