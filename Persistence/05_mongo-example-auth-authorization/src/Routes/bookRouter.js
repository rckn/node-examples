const router = require('express').Router(),
 book = require('../Models/bookModel'),
 bookController = require('../Controllers/bookController')(book);
const guard = require('express-jwt-permissions')();
router
    .get('/', guard.check('user:read'), bookController.getAllBooks)
    .post('/', guard.check('user:write'), bookController.createBook);

router.use('/:bookId', bookController.bookInject);

router
    .get('/:bookId', guard.check('user:read'), bookController.getBook)
    // put replaces the entire object
    .put('/:bookId', guard.check('user:write'), bookController.replaceBook)
    // patch update parts of the object
    .patch('/:bookId', guard.check('user:write'), bookController.updateBook)
    .delete('/:bookId', guard.check('user:write'), bookController.deleteBook);


module.exports = router;