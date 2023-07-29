var fs = require('fs');
var readlineSync = require('readline-sync');

function Student (name, age, classroom) {
	this.name = name;
	this.age = age;
	this.classroom = classroom;
}
var listStudent = [];

while(true) {
	console.log('1. Show list student.');
	console.log('2. Create new student.');
	console.log('3. Save and exit.');
	var choose = parseInt(readlineSync.question('Your choose: '));
	switch(choose) {
	case 1:
		console.log(fs.readFileSync('data.json', { encoding: 'utf8' }));
		break;
	case 2:
		var name = readlineSync.question('Name: ');
		var age = parseInt(readlineSync.question('Age: '));
		var classroom = readlineSync.question('Classroom: ');

		var student = new Student(name, age, classroom);

		listStudent.push(student);
		break;
	case 3:
		fs.writeFileSync('data.json', JSON.stringify(listStudent));
		break;
	}
}