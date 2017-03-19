// Good documentation here:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype 

function Person (fname,lname,age) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
}

Person.prototype.fullName = function() {
    var fullname = `${this.firstName} ${this.lastName}`; // Hans Christian

    return fullname;
}

var a = new Person("Hans", "Christian", 30);

var fullName = a.fullName();

console.log(fullName);

// We can continue to use a to create a new object with a's context
var b = Object.create(a);
// and overwrite the properties we want to overwrite
b.firstName = "Signe";

console.log(b.fullName());