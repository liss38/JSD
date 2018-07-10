const fs = require('fs');
const path = require('path');

function search(req, res) {
	const stream = fs.createReadStream(path.join('public', 'movie.html'));

	res.writeHead(200, { 'Content-Type': 'text/html' });
	stream.pipe(res);
}

module.exports = search;