var EventEmitter = require('events');
var util = require('util');


// function constructor
function Greetr() {
    // We make sure that the 'this' keyword is the same, both
    // in the EventEmitter and in the Greetr (the same reference)
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

// we can still create properties
Greetr.prototype.greet = function() {
    console.log(this.greeting);
    // emit exists because Greetr is only an event emitter:
    this.emit('greet');
};

var greeter1 = new Greetr();

greeter1.on('greet', function () {
    console.log('Someone greeted!');
});



greeter1.greet();
