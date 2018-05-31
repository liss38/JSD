const https = require('https');



function getCities(pprops, done) {
	const apiString =  `locations/?lang=ru&fields=slug,name,timezone,coords`;

	const urlOptions = {
		protocole: 'https:',
		hostname: 'kudago.com',
		path: `/public-api/v1.4/${apiString}`,
		// search: ``,
	};

	// список городов
	https.get(urlOptions, res => {
		res.setEncoding('utf-8');

		console.log(res.statusCode, res.statusMessage);

		let body = '';
		
		res.on('data', data => body += data);
		res.on('end', () => {
			try {
				const json = JSON.parse(body);
				json.forEach(item => console.log(`(${item.slug})  ${item.name}   ${item.timezone} [${item.coords['lat']}:${item.coords['lon']}]`));
				// console.log(json);
			} catch(error) {
				console.log(error);
			}
		});
		// console.loft:)
	});

}



// const url = require('url');
// const myURL = url.parse('https://kudago.com/public-api/v1.4/locations/?lang=ru&fields=slug,timezone');
// console.log(myURL);

// список событий

function getEvents(props, done) {
	let location = props.location || 'msk';
	https.get(`https://kudago.com/public-api/v1.2/events/?location=${location}&page_size=100&actual_since=1527770644&actual_until=1527800399&fields=title,categories`, res => {
		res.setEncoding('utf-8');

		let body = '';
		
		res.on('data', data => body += data);
		res.on('end', () => {
			try {
				const json = JSON.parse(body);
				done(null, json['results']);
			} catch(error) {
				console.log(error);
			}
		});
	});
}


module.exports = {
	getEvents,
	getCities,
}


// console.loft:)