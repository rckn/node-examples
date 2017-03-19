var fs = require('fs');

// will wait until the buffer is filled and has the string back
// before the V8 engine will continue.
// Good for startup and config. But in most cases
// We do not want this to be synchronous
/*
var greet = fs.readFileSync(__dirname + '/text.txt', 'utf8');

console.log(greet);
*/

var greet2 = fs.readFile(__dirname + '/text.txt', 'utf8', function(err, data) {
    // We are using the error first callback style. A typical pattern in node
    // it means that the frist parameter will be an error

    // callback called. When this callback is called is determined by the 
    // event loop.

    if(err) {
        // handle error
        console.log(err);
    }
    // data is the buffer
    console.log("data: " + data);

});

console.log("greet2: " + greet2);
