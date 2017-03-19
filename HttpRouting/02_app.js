var http = require('http');
var fs = require('fs');

http.createServer(function listener(req, res) {
    
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            var html = fs.createReadStream(__dirname + '/01_index.htm')
                .pipe(res);
            break;
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/json' });
            var obj = {
                firstname: 'John',
                lastname: 'Doe'
            };
            // try without JSON.stringify, maybe using toString...
            res.end(JSON.stringify(obj));
            break;
        default:
            res.writeHead(404);
            res.end();
            break;
    }

}).listen(1337, '127.0.0.1');