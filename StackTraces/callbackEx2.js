function a() {
    console.log('a');
    b(c);
}

function b(callback) {
    console.log('b');
    // setImmediate tell node to execute callback through the event loop
    setImmediate(callback);
}

function c() {
    console.log('c');
    console.trace('trace from c');
}

a(); // what will happen?