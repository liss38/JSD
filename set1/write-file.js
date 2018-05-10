const fs = require('fs');

// fs.appendFile('note.txt', '!!!', error => {
//   if(error) {
//     return console.log(error);
//   }
//
//   console.log('file created');
// });


function getValue(flag) {
  const index = process.argv.indexOf(flag);
  return (index > -1) ? process.argv[index + 1] : null;
}

const filename = getValue('-f');
const content = getValue('-c')

fs.appendFile(filename, content, error => {
  if(error) {
    return console.log(error);
  }

  console.log('file created');
});
