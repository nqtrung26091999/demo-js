var Mouse = require('./mouse.js');

function Cat() {
	this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
	mouse.die();
}

var mickey = new Mouse('black');
var jerry = new Mouse('orance');

var tom = new Cat();
tom.eat(jerry);
console.log(tom);

