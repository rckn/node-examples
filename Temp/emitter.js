module.exports = class myEmitter {
    constructor(){
        this.events = {};
    }

    on(type, listener) {
        if (!this.events[type]) {
            this.events[type] = [];
        }

        this.events[type].push(listener);
    }

    emit(type) {
        this.events[type].forEach((listener) => {
            listener();
        });
    }
}