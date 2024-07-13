const fs = require('fs');

const content = fs.readFileSync('README-Angular.md', 'utf8');

const words = content.split(' ');
//const wordCount2 = words.filter(w => w.toLowerCase().includes('clone')).length;
const wordCount2 = content.match(/clone/gi).length;

console.log(words.length);
console.log(wordCount2);