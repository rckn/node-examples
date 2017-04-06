const router = require('express').Router(),
    User = require('../Models/userModel'),
    userController = require('../Controllers/userController')(User);
const jwt = require('jsonwebtoken');
const guard = require('express-jwt-permissions')()

module.exports = (app) => {
    // We can create users without beeing logged in
    router.post('/user/create', userController.createUser);

    // We can authenticate users with credentials 
    router.post('/authenticate', function (req, res) {
        // Code is copied from: https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
        // And slightly modified

        // find the user
        User.findOne({
            name: req.body.name
        }, function (err, user) {

            if (err) throw err;

            if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else if (user) {

                // check if password matches
                if (user.password != req.body.password) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } else {

                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(user, app.get('superSecret'), {
                        //https://github.com/auth0/node-jsonwebtoken
                        expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) // expires in 1 hours
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                }

            }

        });
    });

    // We put the middleware that checks for authentication after the router.post. 
    // This means you can always login without tokens but you cannot do anything else without specifying the token

    router.use(function (req, res, next) {
        // Code is copied from: https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.user = decoded._doc;
                    if(req.user.name === 'Rasmus') {
                    req.user.permissions = [
                        "admin",
                        "user:read",
                        "user:write"
                    ]
                    }

                    console.log(req.user);
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }

    });

   
    return router;
}