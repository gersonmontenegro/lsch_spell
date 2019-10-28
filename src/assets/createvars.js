const fs = require('fs');
const vPath = 'img/vocabulary';
const iPath = 'img/icons';
const fileName = 'index.js';
const fileHeader = 'const Assets = {';
const fileFooter = '};\rexport default Assets;\r';

const getFiles = path => {
  return fs
    .readdirSync(path)
    .filter(file => file.endsWith('.png'))
    .map(file => {
      const propName = file
        .split('/')
        .toString()
        .split('.')[0];
      return `  ${propName}: require('assets/${path}/${file}')`;
    });
};

const imgFiles = [...getFiles(vPath), ...getFiles(iPath)];
const createFile = (content, header, footer) => {
  let fileContent = header;
  content.map(file => (fileContent = `${fileContent}\n${file},`));
  fileContent = `${fileContent}\n${footer}`;
  fs.writeFile(fileName, fileContent, err => {
    if (err) throw err;
  });
};

createFile(imgFiles, fileHeader, fileFooter);
