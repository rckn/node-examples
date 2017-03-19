// Node.js has made Buffer global
var buf = Buffer.from('Hello', 'utf8'); // utf8 is default however
/*
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON()); // console prints it so it looks like a js object, but it is a json object.

console.log(buf[2]);

// the buffer has been initialized with space for 
// 5 characters. It works like FIFO - first in first out
// we expect the first two characters to be wo now.
buf.write('wo');
console.log(buf.toString());
*/
// 1 Byte = 8 BITS = 00101010 (eight zeros and ones)
var buffer = new ArrayBuffer(8); // 64 BITS
// we can store two numbers in the array:
var view = new Int32Array(buffer); // deal with the data in the buffer

view[0] = 43;

view[1] = 10;

view[2] = 14; // will not error, but will not be there, because our buffer is not big enough

console.log(view);

