var readlineSync = require('readline-sync');

var games = {};
games.name = readlineSync.question('Name: ');
games.category = readlineSync.question('category: ');
games.numberStar = parseInt(readlineSync.question('Number star: '));

