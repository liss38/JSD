const fs = require('fs');

const getValue = (key) => (process.argv.indexOf(key) > -1) ? process.argv[process.argv.indexOf(key) + 1] : null;

const filename = getValue('-f');
const content = getValue('-c');

fs.appendFile(filename, `\n\n ${content}`, error => {
	if(error) return console.log(error);

	console.log('Файл записан');
});