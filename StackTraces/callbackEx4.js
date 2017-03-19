function a() {
    console.log('a');
    b(c);
}

function b(callback) {
    console.log('b');
    var resultCallback = (result) => {
        console.log(result);
        // What do you expect to see in this trace?
        console.trace('trace from callback in b');
    }
    
    // setImmediate tell node to execute callback through the event loop
    setImmediate(callback, resultCallback); // think of it as cb(resCB)
}

function c(callback) {
    console.log('c');
    callback(42);
}

a();