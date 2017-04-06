const router = require('express').Router(),
 book = require('../Models/bookModel'),
 bookController = require('../Controllers/bookController')(book);

router.get('/',bookController.getAllBooks);

module.exports = router;