var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetEmpty.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip(); // transform stream, both readable and writable!

// We cannot read from writeable, and therefore cannot pipe further from here.
readable.pipe(writable);

// reads from greet.txt and on every chunk pip to gzip 
// and then gzip will on every chunk pipe/write to compressed
// going from steam to stream to stream
// this is also called method chaining
readable.pipe(gzip).pipe(compressed);