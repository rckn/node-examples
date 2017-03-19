var http = require('http');
var fs = require('fs');

http.createServer(function listener(req,res) {
   
    res.writeHead(200, { 'Content-Type' : 'text/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    // try without JSON.stringify, maybe using toString...
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');