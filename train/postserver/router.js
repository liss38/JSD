const fs = require('fs');
const path = require('path');

const _STATIC = path.join(__dirname, 'public');

const routesList = {
	'/': path.join(_STATIC, 'index.html'),
	'/auth': path.join(_STATIC, 'auth-form.html'),
	'/secret': path.join(_STATIC, 'secret.html'),
};

function parseBody(body) {
	let result = {};
	const keyValuePairs = body.split('&');

	keyValuePairs.forEach((item) => {
		const [key, value] = item.split('=');
		result[key] = value;
	});

	return result;
}

function authentication(login, password) {
	return login === 'admin' && password === 'admin';
}

function getPage(route, payload) {
	let html = '';

	if(routesList[route]) {
		return {
			stream: fs.createReadStream(routesList[route], 'utf-8'),
			response: {
				statusCode: 200, 
				headers: {
					'Content-Type': 'text/html; charset=utf-8',
				},
			},
		};
	} else {
		return false;
	}
	
}

module.exports.router = function (params, done) {
	const { route, method, payload } = params;
	// switch(method) {
	// 	case 'POST':
	// }

	let returnPage = '';

	if(method === 'GET') {
		// returnPage = ;
		done(getPage(route));
	} else if(method === 'POST') {
		const authData = parseBody(payload);
		const isAccess = authentication(authData['login'], authData['password']);
		
		console.log('POST', authData, isAccess);

		if(isAccess) {
			done(getPage('/secret'));
		} else {
			done(getPage('/auth'));
		}
	}
	// let templatePage = routesList[route] || '404';

	
	// return `${route} :: ${method} :: ${routesList[route]}`;
};