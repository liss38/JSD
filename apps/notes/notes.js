const fs = require('fs');

const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];


switch(command) {
	case 'list':
		list((error, notes) => {
			if(error) return console.error(error.message);

			notes.forEach( (note, i) => console.log(`${i + 1}. ${note.title}`) );
		});
		break;
	case 'view':
		view(title, (error, note) => {
			if(error) console.log(error.message);

			console.log(`# ${note.title} \r\n\r\n---\r\n\r\n${note.content}`);
		});
		break;
	case 'create':
		create(title, content, error => {
			if(error) return console.log(error.message);

			console.log('Заметка создана');
			// fs.writeFile('notes.json', data, error => console.log(error.message));
		});
		break;
	case 'remove':
		remove(title, (error, note) => {
			if(error) return console.error(error.message);

			console.log('Заметка удалена');
		});
		break;
	default: 
		console.log('Такой команды нет');
}


function list(done) {
	load(done);
}

function view(title, done) {
	load((error, notes) => {
		const note = notes.find(item => item.title === title);

		if(!note) return done(new Error('Такой заметки нет'));

		done(null, note);
	});	
}

function create(title, content, done) {
	load((error, notes) => {
		if(error) return done(error);
		
		notes.push({title, content});
		
		save(notes, done);
	});
}

function remove(title, done) {
	load((error, notes) => {
		if(error) return done(error);

		notes = notes.filter(item => item.title !== title);

		save(notes, done);
	});
}

function load(done) {
	fs.readFile('notes.json', (error, data) => {
		if(error) {
			if(error.code === 'ENOENT') {
				return done(null, []);
			} else {
				return done(error);
			}
		}

		try {
			const notes = JSON.parse(data);
			done(null, notes);
		} catch(error) {
			done(new Error('Не удалось преобразовать данные'));
		}
		
	});
}

function save(notes, done) {
	try {
		const json = JSON.stringify(notes);

		fs.writeFile('notes.json', json, error => {
			if(error) return done(error);

			done();
		});
	} catch(error) {
		done(error);
	}
}