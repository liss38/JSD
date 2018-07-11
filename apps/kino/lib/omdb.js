const http = require('http');

function get(title, done) {
	const req = http.get(`http://www.omdbapi.com/?apikey=71e67860&t=${title}`, (res) => {

		if(res.statusCode !== 200) {
			done(new Error(`Ошибка: ${res.statusMessage}  ${res.statusCode}`));
			res.resume(); // метода res.end() в данном случае нет
			return;
		}

		res.setEncoding('utf-8');

		let body = '';

		res.on('data', (data) => body += data);
		res.on('end', () => {
			let result;

			try {
				result = JSON.parse(body);
			} catch(error) {
				done(error);
			}

			if(result.Response === 'False') {
				return done(new Error('Фильм не найден'));
			}

			done(null, result);
		});
		res.on('error', (error) => done(error));
	});
}

module.exports = {
	get
};