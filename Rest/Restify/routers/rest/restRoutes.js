module.exports = (routerInstance, controller) => {
     // localhost:3000/course/1
    routerInstance.get('/:id', function (req, res, next) {
        // everything in params or body will be strings
        var result = controller.api.get(Number(req.params.id));
        res.send(result);
        next();
    });

    routerInstance.post('/', function (req, res, next) {
        var id = controller.api.post(req.body);
        res.send('Create succeded. Id is: ' + id);
        next();
    });

    routerInstance.put('/', function (req, res, next) {
        controller.api.put(req.body);
        res.send('Update succeded!')
        next();
    });

    routerInstance.del('/:id', function (req, res, next) {
        console.log('delete is called!');
        controller.api.delete(Number(req.params.id))
        res.send('Delete succeded!')
        next();
    });
}


