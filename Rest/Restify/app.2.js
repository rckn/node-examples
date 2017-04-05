// middelware example

const restify = require('restify');

var server = restify.createServer();

// If we need to get something done before using our routes (get, put, post etc)
// http://restify.com/#common-handlers-serveruse
// obs: remember to call use before routes (they get registered in sequential order)
server.use((req,res,next) =>{
    console.log(req.params);
    console.log(req.route);
    next();
});

server.get('/hello/:name', function(req, res, next){
   res.send('hello ' + req.params.name);
    next();
});

server.listen(8080, function(){
     console.log('Listening on 8080...');
});