var http = require('http');
var fs = require('fs');

http.createServer(function listener(req,res) {
   
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    // by default a buffer gets returned (see 02_app.js)
    // by saying utf8 we indicate we want a string!
    var html = fs.readFileSync(__dirname + '/03_index.htm', 'utf8');
    var message = 'Hello http!...';
    html = html.replace('{Message}',message);
    res.end(html);

}).listen(1337, '127.0.0.1');