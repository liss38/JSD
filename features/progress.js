let waitTimeout = 3000;
let waitInterval = 100;
let percent = 0;
let currentTime = 0;

function print(percent) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`Загрузка... ${percent}%`);
}

setTimeout(() => {
	print(100);
	process.stdout.write('\nГотово!\n');
	process.exit();
}, waitTimeout);

setInterval(() => {
	currentTime += waitInterval;
	percent = Math.floor(currentTime / waitTimeout * 100);
	print(percent);
}, waitInterval);