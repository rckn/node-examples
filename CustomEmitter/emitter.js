function Emitter() {
     this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    // create a property on this.events (eg. getFile)
    // and we make sure that this property will be an array
    this.events[type] = this.events[type] || [] // exists? or new array
    // add functions to the array
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    // if we have that property
    if(this.events[type]) {
        // which should be an array
        // loop over  
        this.events[type].forEach(function(listener) {
            // and invoke
            listener();
        });
    }
}

module.exports = Emitter;