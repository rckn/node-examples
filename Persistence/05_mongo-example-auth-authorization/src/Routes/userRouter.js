const router = require('express').Router(),
    user = require('../Models/userModel'),
    userController = require('../Controllers/userController')(user),
    guard = require('express-jwt-permissions')();

router.use(guard.check('admin'));

router.use(function (err, req, res, next) {
    if (err.code === 'permission_denied') {
        res.status(401).send('insufficient permissions');
    }
});

router
    .get('/', userController.getAllUsers)
    .post('/', userController.createUserAdmin);

router.use('/:userId', userController.userInject);

router
    .get('/:userId', userController.getUser)
    // put replaces the entire object
    .put('/:userId', userController.replaceUser)
    // patch update parts of the object
    .patch('/:userId', userController.updateUser)
    .delete('/:userId', userController.deleteUser);

module.exports = router;