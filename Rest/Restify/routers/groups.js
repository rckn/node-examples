const Router = require('restify-router').Router;
const routerInstance = new Router();
const restRouter = require('./rest/restRoutes');

module.exports = (controller) => {
     
    restRouter(routerInstance, controller);

    return {
            routerInstance
    }
}