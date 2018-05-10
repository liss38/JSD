/*
  объект process
*/
// :1
console.log(':1');
console.log(process.execPath); // возвращпет путь выполнения приложения
console.log(process.version); // предоставляет версию Node
console.log(process.platform); // это свойство идентифицирует платформу


// :2
console.log();
console.log();
console.log(':2');
console.log(process.argv); // это свойство содержит информацию, которая предоставляется приложенпипем при запуске
const message = process.argv[2];
console.log(`message is: ${message}`);

// :3
console.log();
console.log();
console.log(':3');
// флаг: для того чтобы не перепутать просто значение от флага(специальная метка) в массиве  process.argv используется такая
// запись флагов --имя-флага(длинная запись флага), либо -и (короткая запись флага)
// например для сообщения сделаем такой флаг --message либо такой -m
const index = process.argv.indexOf('-m');
if(index > -1) {
  const message = process.argv[index + 1];
  console.log(message);
}



// 4:
console.log();
console.log();
console.log(':4');
function getValue(flag) {
  const index = process.argv.indexOf(flag);
  return (index > -1) ? process.argv[index + 1] : null;
}


const greeting = getValue('-m') || 'Hello';
const name = getValue('-n') || 'friend';
console.log(`${greeting}, ${name}`);
