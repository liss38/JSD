const fs = require('fs');
const path = require('path');

function notFound(req, res) {
	const stream = fs.createReadStream(path.resolve('public', 'error.html'));
	res.writeHead(200, { 'Content-Type': 'text/html' });
	stream.pipe(res);
}

module.exports = notFound;