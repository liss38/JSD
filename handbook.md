https://coursehunters.net/course/codedojo-nodejs

#1
 >Выход из REPL: дважды нажать `Ctr+C` или ввести в консоли `.exit`

 >`console.log(global)` - глобальный объект в Node("аналог" объекта `window` в браузере)

 >`console.log(__dirname)` - директория откуда запущен файл
 >`console.log(__filename)` - полный путь к файлу + название файла
 >обе константы доступны глобально


 >`process.execPath` - вернёт путь выполнения для текущего приложения
 >`process.version` - вернёт версию Ноды
 >`process.platform` - вернёт информацию о текущей ОС
 >`process.argv` - вернет массив с информацией, которая передается с приложением при его запуске, удобно использовать для считывания ключей и их значений(`>node app.js -k key-value --key-name "key value"`)

 >`getValue(flag)`, функция считвает флаги, с которыми было запущенно приложение:

 ```js
	 function getValue(flag) {
	 	let index = process.argv.indexOf(flag);

	 	return (index > -1) ? process.argv[index + 1] : null;
	 }

	 let filename = getValue('-f'); // >node app.js -f index.html
	 console.log(filename); // выведет строку 'index.html'
 ```

 >`process.stdin` - I/O, extended input, считывает поток данных при вводе в консоль
 >`process.stdout` - I/O, extended output, отдает поток данных
 >поток данных представлен в двоичном формате, работа с I/O ведется через спец. объект `buffer`
 >`process.stdin.on(event, callback)`
 >`process.exit()` - выход из режима ввода данных в консоль


```js
const stdin = process.stdin; // extended input
const stdout = process.stdout; // extended output

stdout.write('Привет! Как тебя зовут? ');
stdin.on('data', input => {
  const name = input.toString().trim();
  const reversedName = name.split('').reverse().join('');
  stdout.write(`${name} -> ${reversedName}`);
  process.exit();
});

process.on('exit', () => stdout.write('\n\nbye-bye('))
```

 >`Buffer` - в Ноде буффер - это специальный объект для работы с бинарными данными

 ```
 const buffer = Buffer.from('Node.js');
 console.log(buffer);
 ```

 >`buffer.toString()` приведет содержимое буффера к строке в utf-8 формате
 >`Buffer.from(source, charset)` - `source` - содержимое буффера, `charset` - кодировка символов, по умолчанию используется utf-8
 >`buffer.toJSON()`
 >`buffer[0] = 77` - можно как с массивом обращаться к элементу через его индекс
 >`buffer.write('M')` - перезаписывает значение буффера
 >`buffer.slice(0, 4).toString()` - вернет первые четыре элемента буффера
 >`buffer.length` - вернет размер буффера
 >`Buffer.alloc(256)` - создаст буффер в 256 байт


 >`setTimeout(callback, waitTimeout)`
 >`setInterval(callback, waitInterval)`

 >`process.stdout.clearLine()`
 >`process.stdout.cursorTo(0)`
 >`process.stdout.write('text').toString()`
 >`Math.floor(val)`
 >`process.exit()`

 >`const path = require('path');`
 >`console.log(path.basename(__filename));`
 >`console.log(path.basename(__dirname));`

 >`console.log(path.join(__dirname, 'www', 'files', 'uploads'))`


 >`const fs = require('fs')`
 >`const contents = fs.readdirSync(__dirname)` - синхронное чтение директории
 >Асинхронное чтение директороии

 ```js
 	console.log('Reading directory');

 	fs.readdir(__dirname, (error, contents) => {
 		if(error) return console.log(error);
 		console.log(contents);
 	});

 	console.log('Finished reading');
 ```

 >По умолчанию используют асинхронные методы, чтобы не блокировать процесс выполнения программы

 >Чтение файла

```js
	fs.readFile('note.md', (err, data) => {
		if(err) return console.log('Обработка ошибки');

		console.log(data.toString()); // т.к. используется буффер
	});
```

 >__`fs.writeFile(file, content, callback)`__ - (пере-)записывает в файл с названием `file` данные/содержимое из `content`, в `callback(err)` обрабатывается ошибка и успех
 >__`fs.appendFile(file, appendContent, callback)`__ - добавляет содержимое из `appendContent` в конец файла `file`, `callback(err)` ...

 >наблюдение за изменениями в файлах/директориях и обработка ошибок при работе с событиями

 ```js
	const watcher = fs.watch(__dirname, (event, filename) => console.log(`${filename}  ->  ${event}`));
	watcher.on('error', (error) => console.log(error));
 ```