const stdin = process.stdin; // extended input
const stdout = process.stdout; // extended output

// stdout.write('Node JS\n');

// stdin.on('data', data => stdout.write(data));

stdout.write('Привет! Как тебя зовут? ');
stdin.on('data', input => {
  const name = input.toString().trim();
  const reversedName = name.split('').reverse().join('');
  stdout.write(`${name} -> ${reversedName}`);
  process.exit();
});

process.on('exit', () => stdout.write('\n\nbye-bye('))
