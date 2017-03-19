// Good documentation here:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype 

function Person (fname,lname,age) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
}

Person.prototype.fullName = function() {
    
    var fullname = `${this.firstName} ${this.lastName}`;

    return fullname;
}

// We can also do a more classic inhertance example, 
// that, in concept, looks a lot like the one from C# or Java
var Employee = function(title, fname, lname, age) {
    // Calling the person constructor
    // make sure that the this keyword is the same both in Employee
    // and in person for the given object
    Person.call(this,  
        fname, lname, age
    );
    this.title = title;
}

// Standard pattern to setup the prototpye chain:
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

var TempEmployee = function(title, fname, lname, age,  start, end) {
    Employee.call(this,  
        fname, lname, age, title
    );
    this.start = start;
    this.end = end;

}

TempEmployee.prototype = Object.create(Employee.prototype);
TempEmployee.prototype.constructor = TempEmployee;

module.exports = {
    TempEmployee,
    Employee,
    Person
}
