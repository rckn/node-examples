// routing example

const restify = require('restify');
// Get our controllers an initialize them
const courseController = require('./controllers/course')();
const groupController = require('./controllers/groups')();
// Get our routers and initialize them with our controller as parameters
const courseRouter = require('./routers/course')(courseController);
const groupRouter = require('./routers/groups')(groupController);

var server = restify.createServer();

// passes the body of an incoming request
// mapParams false means we do not map the body into params.
server.use(restify.bodyParser({ mapParams: false })); 

server.use((req,res,next) =>{
    console.log(req.route);
    next();
});

// Tell our restify to use our routes
courseRouter
    .routerInstance
    .applyRoutes(server, '/course');

groupRouter
    .routerInstance
    .applyRoutes(server, '/group');

// And finally run the server!
server.listen(8081, function(){
     console.log('Listening on 8081...');
});