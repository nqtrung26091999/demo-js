var fs = require('fs');

var text = fs.readFileSync('text.txt', { encoding: 'utf8' });
console.log(text);