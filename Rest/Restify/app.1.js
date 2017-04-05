// Hello world example

const restify = require('restify');

var server = restify.createServer();

server.get('/hello/:name', function(req, res, next){
   res.send('hello ' + req.params.name);
    next();
});

server.listen(8080, function(){
    console.log('Listening on 8080...');
});