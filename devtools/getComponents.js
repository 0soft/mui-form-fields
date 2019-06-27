const fs = require('fs');
const path = require('path');

const ignored = new Set(['FormField', 'FormDialog']);
module.exports = () => {
  const componentsPath = path.resolve(__dirname, '..', 'src', 'components');
  return fs
    .readdirSync(componentsPath)
    .filter(p => {
      return p.match(/\.tsx/);
    })
    .map(p => {
      return p.replace(/\.tsx/g, '');
    })
    .filter(c => !ignored.has(c));
};
