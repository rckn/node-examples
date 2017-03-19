var age = 34;
var gender = 'female';

var person = require('./person');

console.log(person);

var res = (function PeronModule(age, gender) {
    function calcRealAge() {
        if(gender === 'female') return age + 10;
        return age;
    }

    return {
        person : {
            "Name" : 'Jane',
            "Gender" : gender,
            "Age" : calcRealAge()
        }
    }
}(age, gender));


console.log(res);