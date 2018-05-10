const fs = require('fs');
// console.log(fs);

// // синхронный метод чтения директории
// const contents = fs.readdirSync(__dirname);
// console.log('Reading directory');
// console.log(contents);
// console.log('Finished reading');


// асинхронный метод чтения директории
console.log('Reading directory');
fs.readdir(__dirname, (error, contents) => {
  if(error) throw error;
  console.log(contents);
})


console.log('Finished reading');
