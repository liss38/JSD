const fs = require('fs');
const path = require('path');

function home(req, res) {
	const stream = fs.createReadStream(path.resolve('public', 'index.html'));

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');

	stream.on('error', (error) => {});
	stream.pipe(res);
}

module.exports = home;