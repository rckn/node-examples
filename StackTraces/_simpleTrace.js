function a() {
    console.log('a');
    b();
}
function b() {
    console.log('b');
    c();
}
function c() {
    console.log('c');
    console.trace();
}
a(); // How will the trace look like?
// try to log the trace in b and then in a

