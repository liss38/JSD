const fs = require('fs');

const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];


switch(command) {
	'list':
		break;
	'view':
		break;
	'create':
		break;
	'remove':
		break;
	default: 
		console.log('Такой команды нет');
}
