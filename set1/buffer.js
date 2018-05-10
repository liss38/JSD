const buffer = Buffer.from('NodeJS', 'utf-8');
// console.log(buffer.toString());
// console.log(buffer.toJSON());
// console.log(buffer[0]);


// console.log(buffer.toString());
// buffer[0] = 77;
// console.log(buffer.toString());
// buffer.write('C');
// console.log(buffer.toString());


// // получение части буфера
// console.log(buffer.slice(0, 4).toString());
//
// // размер буффера
// console.log(buffer.length);


// получаем буфер размеров в 256 байт
const buffer2 = Buffer.alloc(256);
console.log(buffer2);
console.log(buffer2.length)
