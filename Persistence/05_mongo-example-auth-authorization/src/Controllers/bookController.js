module.exports = (book) => {
    const bookInject = (req, res, next) => {
        const id = req.params.bookId;
        book.findById(id, (err, book) => {
            if (err) return console.log(err);
            console.log(book);
            req.book = book;
            next();
        })
    }

    const getBook = (req, res, next) => {
        res.json(req.book);
    }

    const getAllBooks = (req, res, next) => {
        book.find({}, function (err, books) {
            if (err) return console.log(err);
            res.json(books);
        });
    }

    const replaceBook = (req, res, next) => {
        
        const bookFromDB = req.book;
        const bookFromRequest = req.body;

        bookFromDB.title = bookFromRequest.title;
        bookFromDB.author = bookFromRequest.author;
        bookFromDB.year = bookFromRequest.year;

        saveBook(bookFromDB, res);
    }

    const createBook = (req, res, next) => {
        const bookObj = book({
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        })
        saveBook(bookObj, res);
    }

    const deleteBook = (req, res, next) => {
        req.book.remove((err, book) => {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(200).json({ _id : req.book._id })
            }

        })
    }

    const updateBook = (req, res, next) => {
           if (req.body._id) {
            // delete vs null: 
            // http://stackoverflow.com/questions/1947995/when-should-i-use-delete-vs-setting-elements-to-null-in-javascript
            delete req.body._id;
        }

        for (var p in req.body) {
            req.book[p] = req.body[p];
        }

        req.book.save(function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(req.book);
            }
        });
    }

    const saveBook = (bookObj, res) => {
        bookObj.save((err, book) => {
            if (err) {
                res.status(500)
                    .send('Failed. Error: ' + err);
            } else {
                res.status(201);
                // Give back the id of the newly created bookobject
                // to the user of the rest api
                res.json({ _id: bookObj._id });
            }
        })
    }

    return {
        getAllBooks,
        createBook,
        getBook,
        replaceBook,
        deleteBook,
        updateBook,
        bookInject
    }
}