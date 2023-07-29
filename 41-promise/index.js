// var fs = require('promise-fs');

// function onDone(song) {
// 	console.log(song);
// }

// function onError(err) {
// 	console.log(err);
// }

// function readFile(path) {
// 	var options = { encoding: 'utf8' }
// 	return fs.readFile(path, options);
// }

// readFile('song1.txt')
// .then(onDone)
// .then(function() {
// 	return readFile('song2.txt')
// })
// .then(onDone)
// .catch(onError);

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

readFilePromise('song1.txt')
.then(function(song1) {
	console.log(song1);
})
.catch(function(err) {
	console.log(err);
});