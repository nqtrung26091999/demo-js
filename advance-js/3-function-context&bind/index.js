var mouse = {
    name: 'mickey',
    sayHi: function() {
        console.log('Hi my name is ' + this.name);
    }
}

var cat = {
    name: 'tom'
}

var dog = {
    name: 'pluto'
}

var say = mouse.sayHi.bind(dog);
say();