function a() {
    console.log('a');
    b(c);
}

function b(callback) {
    console.log('b');
    callback();
}

function c() {
    console.log('c');
    console.trace('trace from c');
}

a(); // what will happen?