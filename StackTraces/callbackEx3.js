function a() {
    console.log('a');
    b(c);
}

function b(callback) {
    console.log('b');
    // setImmediate tell node to execute callback through the event loop
    var result = setImmediate(callback);
    console.log(result); // What will the result be?
}

function c() {
    console.log('c');
    console.trace('trace from c');
    return 42;
}

a();