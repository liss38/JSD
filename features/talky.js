const stdin = process.stdin;
const stdout = process.stdout;

stdout.write('Привет! Как тебя зовут?\n');

stdin.on('data', input => {
	let name = input.toString().trim();

	if(name === '') name = 'Аноним';

	stdout.write(`Удачи, ${name.split('').reverse().join('')}!\n`);
	process.exit();
});

process.on('exit', () => {
	stdout.write('\n\n процесс завершился...\n');
});