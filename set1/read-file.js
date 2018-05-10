const fs = require('fs');

function getValue(flag) {
  const index = process.argv.indexOf(flag);

  return (index > -1) ? process.argv[index + 1] : null;
}

const filename = getValue('-f');

fs.readFile(filename, (error, data) => {
  if(error) {
    return console.log('Такого файла нет');
  }

  console.log(data.toString());
})
