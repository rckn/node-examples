const router = require('express').Router(),
 book = require('../Models/bookModel'),
 bookController = require('../Controllers/bookController')(book);

router
    .get('/',bookController.getAllBooks)
    .post('/',bookController.createBook);

router.use('/:bookId', bookController.bookInject);

router
    .get('/:bookId', bookController.getBook)
    // put replaces the entire object
    .put('/:bookId', bookController.replaceBook)
    // patch update parts of the object
    .patch('/:bookId', bookController.updateBook)
    .delete('/:bookId', bookController.deleteBook);

module.exports = router;