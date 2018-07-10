const http = require('http');

function get(title, done) {
	const req = http.get(`http://www.omdbapi.com/?t=${title}`, (req, res) => {
		console.log(res.statusCode);
	});
}

module.exports = {
	get
};