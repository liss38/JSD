const render = require('../lib/render');

function home(req, res) {
	res.render('index.html');
}

module.exports = home;