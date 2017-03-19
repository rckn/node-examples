const EventEmitter = require('events');
// Inherit from the node.js event emitter
module.exports = class GrettingEmitter extends EventEmitter {
    constructor() {
        super();
    }
// Define one or more functions
// Typical when you Inherit from event emitter it is becuase
// you some point in time want to emit an event
    greet(data ) {
        console.log('Somone greeted!: ' + data);
        this.emit('greeting', data);
    }
}

