const Emitter = require('events');
const eventcfg = require('./config').events;
const Emp = require('../HelloNode/After/app');


// construct a new object
let eventHandler = new Emitter();

// We are calling hello an event, but is in reality just a property name
// keep the names short, because they are just a property name
eventHandler.on(eventcfg.HELLO, () => console.log('Hello from jan'));

eventHandler.on(eventcfg.HELLO, () => console.log('Hello from signe'));

// emit the event (call all functions in the hello array)
eventHandler.emit(eventcfg.HELLO);