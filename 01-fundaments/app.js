const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf8');

const newContent = data.replace(/3000/ig, '4200');

fs.writeFileSync('README-Angular.md', newContent);

console.log(newContent);
