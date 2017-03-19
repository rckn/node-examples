var Person = require('./person');

module.exports = class Employee extends Person {
    constructor(name){
        super(name)
    }
}