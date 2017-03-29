const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function (app) {

    book = {
        id: 0,
        title: 'Hans',
        year: '1401'
    }
    // database mockup!
    var books = [book];
    // Pattern matching on id using :id
    app.get('/api/book/:id', (req, res) => {
        // get from database...
        var id = req.params.id;
        var book = findBook(id);
        if (book) {
            res.send(book);
        } else {
            res.status(500);
            res.send('ops: ' + book);
        }
    });

    app.post('/api/book', jsonParser, (req, res) => {
        // save to the database 
        var book = req.body.book;

        if(!book){ 
             res.status(500);
             res.send('No book provided');
            return;
        }

        var bookExists = findBook(book.id)

        if (bookExists) {
            updateBook(book);
            res.status(201);
            res.send('Success in update!');
        } else {
             // book is not null
            // no book with id exists
            createBook(book);
            res.status(201);
            res.send('Success in create!');
        }
    });

    app.delete('/api/book', jsonParser, (req, res) => {
        // delete from database
        var id = req.body.id;
        if(deleteBook(id)) {
             res.status(202);
             res.send('Success!');
        } else {
              res.status(500);
              res.send('Could not delete book');
        }

    });

    var findBook = function (id) {
        var book = null;

        for (var index = 0; index < books.length; index++) {
              var bookItem = books[index];
              if (bookItem.id == id) {
                    book = bookItem;
                  break;
              }
          }

        return book;
    }

    var createBook = function (book) {
        books.push(book);
    }

    var deleteBook = function(id) {
          var deleted = false;

          for (var index = 0; index < books.length; index++) {
              var book = books[index];
              if (book.id == id) {
                  books.splice(index,1);
                  deleted = true;
                  break;
              }
          }
          return deleted;
    }

    var updateBook = function(book) {
           for (var index = 0; index < books.length; index++) {
              var bookItem = books[index];
              if (bookItem.id == book.id) {
                  books[index] = book;
                  break;
              }
          }
    }

 

}

