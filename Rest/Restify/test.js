const Router = require('restify-router').Router;
const routerInstance = new Router();


module.exports = (controller) => {
    
    routerInstance.get('/:id', function (req, res, next) {
        var result = controller.get(req.params.id);
        res.send('hello ' + result);
        next();
    });

    routerInstance.post('/', function(req,res, next) {
            controller.create(req.body.group);
            next();
    });

    routerInstance.put('/', function(req,res, next) {
            controller.update(req.body.group);
            next();
    });

    routerInstance.del('/:id', function(req,res, next) {
            controller.delete(req.params.id)
            next();
    });

    return {
        api: {
            router:  routerInstance
        }
    }
}
