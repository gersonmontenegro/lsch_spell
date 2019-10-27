const fs = require('fs');
const path = 'img/vocabulary';
const fileName = 'index.js';
const fileHeader = 'const Assets = {';

const createFile = content => {
  fs.writeFile(fileName, content, err => {
    if (err) throw err;
  });
};

const closingFile = () => {
  fs.appendFile(fileName, `\n};\nexport default Assets;\n`, () => {});
};

const addingLetters = letters => {
  let l = '';
  letters.map(async file => {
    const fragments = file.toString().split('.');
    l += `\n  ${fragments[0]}: 'assets/img/vocabulary/${file}',`;
  });
  return l;
};

createFile(fileHeader);

fs.readdir(path, (_err, items) => {
  const letters = addingLetters(items);
  fs.appendFile(fileName, letters, () => {
    closingFile();
  });
});
