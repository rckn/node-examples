/**
 * BooksController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // methods based on http://sailsjs.com/documentation/reference/waterline-orm/models
    
    create: function (req, res) {
        Books.create(req.body).exec(function (err, book) {
            res.end(JSON.stringify(book));
        });
    },

    destroy: function (req, res) {
        Books.destroy(req.body).exec(function (err) {
            if (err) {
                res.end("Error: " + err);
            } else {
                res.end("Book destroyed.");
            }
        });
    },

    index: function (req, res) {
        Books.find(function (err, books) {
            console.log(JSON.stringify(books));
            res.view({
                books: books
            });
        });
    }
};

