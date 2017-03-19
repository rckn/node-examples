function greet(callback) {
    console.log('Hello');
    var data = {
        name: 'John Doe'
    }
    // callback will be called sync
    callback(data);
    // if you need it to be async
    setImmediate(callback, data);
}

greet(function(data) {
    
    console.log('the cb was invoked!: ' + data.name );
});

console.log('done!');