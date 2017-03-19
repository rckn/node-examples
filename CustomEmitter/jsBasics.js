// Different ways to access properties on objects
/*
var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';

console.log(obj[prop]);
*/
//funciton and arrays

var arr = [];

arr.push(function hello() {
    console.log('Hello world1');
})

arr.push(function hello2() {
    console.log('Hello world2');
})

arr.push(function hello3() {
    console.log('Hello world2');
})

arr.forEach(function(item){
    item();
});
