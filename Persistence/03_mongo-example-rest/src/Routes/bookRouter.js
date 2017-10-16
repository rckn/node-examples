const router = require('express').Router(),
 book = require('../Models/bookModel'),
 bookController = require('../Controllers/bookController')(book);

router
    .get('/',bookController.getAllBooks)
    .post('/',bookController.createBook);
    
// localhost:3000/api/book/3423421421dsf3
router.use('/:bookId', bookController.bookInject);

router
    .get('/:bookId', bookController.getBook)
    // put replaces the entire object
    .put('/:bookId', bookController.replaceBook)
    // patch update parts of the object
    .patch('/:bookId', bookController.updateBook)
    .delete('/:bookId', bookController.deleteBook);

module.exports = router;