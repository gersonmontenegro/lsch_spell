const fs = require('fs');
const vPath = 'img/vocabulary';
const iPath = 'img/icons';
const fPath = 'fonts';
const fileName = 'index.js';
const fileHeader = 'const Assets = {';
const fileFooter = '};\rexport default Assets;\r';

const getFiles = path => {
  return fs
    .readdirSync(path)
    .filter(file => file.endsWith('.png') || file.endsWith('.ttf') || file.endsWith('.TTF'))
    .map(file => {
      const propName = file
        .split('/')
        .toString()
        .split('.')[0];
        console.log('looking for a font: ', file);
      if (file.endsWith('.png')) {
        return `  ${propName}: require('assets/${path}/${file}')`;
      }
      return `  ${propName}: '${propName}'`;
    });
};

const imgFiles = [...getFiles(vPath), ...getFiles(iPath), ...getFiles(fPath)];
const createFile = (content, header, footer) => {
  let fileContent = header;
  content.map(file => (fileContent = `${fileContent}\n${file},`));
  fileContent = `${fileContent}\n${footer}`;
  fs.writeFile(fileName, fileContent, err => {
    if (err) throw err;
  });
};

createFile(imgFiles, fileHeader, fileFooter);
