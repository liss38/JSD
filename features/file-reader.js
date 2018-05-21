const fs = require('fs');

const getValue = (key) => (process.argv.indexOf(key) > -1) ? process.argv[process.argv.indexOf(key) + 1] : null

let filename = getValue('-f');

fs.readFile(filename, 'utf-8', (err, content) => {
	if(err) return console.log('Такого файла нет');

	console.log(content);
});