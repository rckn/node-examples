// routing example with automatic routing based on named conventions.

const restify = require('restify');
const fs = require('fs');
const path = require('path');
const { searchAndRemove } = require('./common/helperMethods');

var server = restify.createServer();

// Makes it possible to read from body:
server.use(restify.bodyParser({ mapParams: false })); 

server.use((req, res, next) => {
    try {
        if(req.params) console.log(req.params);
        if(req.body) console.log(req.body);
        console.log(req.route);
    } catch (error) {
        console.log('could not log request. Error: ' + error );
    }
    next();
});

var controllers = [];

// Find all controllers and insert them into an array with their name and the controller api
fs.readdirSync(__dirname + '/controllers').forEach(function (file) {
    if (path.extname(file) === '.js') {
        dependencies = {};
        var controller = require('./controllers/' + file);
        controllers.push({
            name: path.basename(file, '.js'),
            api: controller(dependencies).api
        });
    }
});

// dynamically include routes
// we need to do this sync because this must be setup before the server is running
fs.readdirSync(__dirname + '/routers').forEach(function (file) {
    if (path.extname(file) === '.js') {
        try {   
            var name = path.basename(file, '.js');
            var router = require('./routers/' + file);

            var controller = searchAndRemove(name, controllers, 'name')[0];
            // apply routes to server
            // set the base route equal to the name of the file
            router(controller).routerInstance.applyRoutes(server, '/' + name);
        } catch (error) {
            console.log('could not create router: ' + error)
        }
    }
});

server.listen(8081, function () {
    console.log('Listening on 8081...');
});

