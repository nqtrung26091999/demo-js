var co = require('co');

var fs = require('fs');

function readFilePromise(path) {
var options = { encoding: 'utf8' };
	return new Promise(function(resolve, reject) {
		fs.readFile(path, options, function(err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

// co(function*() {
// 	var values = yield [
// 		readFilePromise('song1.txt'),
// 		readFilePromise('song2.txt')
// 	];
// 	// var song1 = yield readFilePromise('song1.txt');
// 	// var song2 = yield readFilePromise('song2.txt');
// 	return values;
// })
// .then(function(values) {
// 	console.log(values);
// })
// .catch(function(err) {
// 	console.log(err);
// })

var readFile = co.wrap(function*(files) {
	var data = yield files.map(function(file) {
		return readFilePromise(file);
	});
	return data;
});

readFile(['song1.txt', 'song2.txt'])