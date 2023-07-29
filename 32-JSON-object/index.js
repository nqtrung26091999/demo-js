var myDog = {
	name: 'Su',
	age: 1,
	dead: false
};

var myDogString = JSON.stringify(myDog);

var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat);