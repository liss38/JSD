const fs = require('fs');
// если -c не указан то, читает файл, иначе пишет в файл

const getValue = (key) => (process.argv.indexOf(key) > -1) ? process.argv[process.argv.indexOf(key) + 1] : null;

const help = process.argv.indexOf('-h') > -1;
const filename = getValue('-f');
const content = getValue('-c');
const remove = getValue('-d');
// const listing = ggetValue('-l');

if(help) {
console.log(`
HELPDESK:
========
> node file-rw -h  - F1
> node file-rw -f <имя_файла>  -  просмотр файла
> node file-rw -f <имя_файла> -c <какой-то текст>  -  создание файла, запись в файл
> node file-rw -d <имя_файла>  -  удаление файла
`);
} else if(content) {
	fs.appendFile(filename, content, err => {
		if(err) return console.log(`Что-то пошло не так: ${err.message}`);

		console.log(`Файл ${filename} записан, \n для просмотра наберите команду: node file-rw -f ${filename}`);
	});
} else if(filename) {
	fs.readFile(filename, 'utf-8', (err, content) => {
		if(err) return console.log(`Что-то пошло не так: ${err.message}`);

		console.log(`Содержимое файла ${filename}:`);
		console.log(`=========`);
		console.log(``);
		console.log(`${content}`);
	});
} else if(remove) {
	fs.unlink(remove, err => {
		if(err) return console.log(`Что-то пошло не так: ${err.message}`);

		console.log(`Файл ${remove} успешно удален`);
	});
} else {
	console.log('неизвестная команда');
}