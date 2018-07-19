const render = require('../lib/render');

function notFound(req, res) {
	res.render('error.html', { error: 'Фильм не найден' });
}

module.exports = notFound;