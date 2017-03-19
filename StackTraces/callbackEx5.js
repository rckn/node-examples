function a() {
    console.log('a');
    b(c);
}

function b(callback) {
    console.log('b');
    let greeting = 'hello';

    var resultCallback = (result) => {
        // If you look at the stack from Ex4. We expect b to have its own stack
        // Can we expect that greeting has the value 'hello'?
        // Explain the result!
        console.log(greeting + " " + result);
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