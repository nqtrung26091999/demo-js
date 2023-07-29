// function Cat() {
//     this.stomach = [];
// }

// Cat.prototype.eat = function (mouse) {
//     this.stomach.push(mouse);
//     return this;
// }

// function Mouse(name) {
//     this.name = name;
// }

// var tom = new Cat();
// var mouse = new Mouse();
// mouse.name = 'jerry';

// tom.eat(mouse);

// console.log(tom);

var todoList = document.getElementById('todo-list');

var newLi = document.createElement('li');
newLi.textContent = '4. Swimming with Cermia';
todoList.appendChild(newLi);
todoList.lastChild.remove();

