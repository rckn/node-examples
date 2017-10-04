var http = require('http');
var fs = require('fs');

http.createServer(function listener(req,res) {
   
    res.writeHead(200, { 'Content-Type' : 'text/html' });
   // Instead filling up the buffer with an entire file
   // we can use streams. This will reduce the total memory consumption!
     var html = fs
    .createReadStream(__dirname + '/02_index.htm', 'utf8')
    .pipe(res);

    // If we want to recreate the template example from 03_app.js
    // We would need to create a custom stream!

}).listen(1337, '127.0.0.1');