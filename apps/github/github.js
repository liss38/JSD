const https = require('https');

function getRepos(username, done) {
	if(!username) return done(new Error('Необходимо указать имя пользователя'));

	const options = {
		hostname: 'api.github.com',
		path: `/users/${username}/repos`,
		headers: {
			'User-Agent': 'liss38',
		},
	};

	const req = https.get(options, res => {
		res.setEncoding('utf-8');

		if(res.statusCode !== 200) return done(new Error(`Не удалось получить ответ от сервера (${res.statusCode}  ${res.statusMessage})`))

		let body = '';

		res.on('data', data => body += data);
		res.on('end', () => {
			try {
				const json = JSON.parse(body);
				done(null, json);
			} catch(error) {
				done(new Error(`Не удалось обработать данные (${error.message})`));
			}
		});
	});

	req.on('error', error => done(new Error(`не удалось отправить запрос (${error.message})`)));
}

module.exports = {
	getRepos
};