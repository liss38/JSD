const kudago = require('./kudago');

function getValue() {}

// просмотр списка городов
// просмотр списка событий

kudago.getEvents({ location: 'msk' }, (error, data) => {
	if(error) return console.log(error);

	data.forEach((event, i) => console.log(`${i + 1}. "${event.title}"   ${event.categories} \r\n`));
});