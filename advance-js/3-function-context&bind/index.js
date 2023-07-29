var mouse = {
    name: 'mickey',
    sayHi: function() {
        console.log(this.name);
    }
}

var cat = {
    name: 'tom'
}

var say = mouse.sayHi.bind(cat);
say();