const Router = require('restify-router').Router;
const routerInstance = new Router();
const restRouter = require('./rest/restRoutes');


module.exports = (controller) => {
    
    restRouter(routerInstance, controller);
        // localhost:3000/course/3/groups
    routerInstance.get('/:courseId/groups/', (req,res, next) => {
       var result = controller.api.getGroups(Number(req.params.courseId));
        res.send(result);
        next();
     });

    return {
           routerInstance
    }
}