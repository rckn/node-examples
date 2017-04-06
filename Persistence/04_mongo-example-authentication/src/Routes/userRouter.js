const router = require('express').Router(),
 user = require('../Models/userModel'),
 userController = require('../Controllers/userController')(user);

router
    .get('/',userController.getAllUsers)
    .post('/',userController.createUser);

router.use('/:userId', userController.userInject);

router
    .get('/:userId', userController.getUser)
    // put replaces the entire object
    .put('/:userId', userController.replaceUser)
    // patch update parts of the object
    .patch('/:userId', userController.updateUser)
    .delete('/:userId', userController.deleteUser);

module.exports = router;