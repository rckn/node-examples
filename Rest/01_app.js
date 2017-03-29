const express = require('express');
const bodyParser = require('body-parser');
var app = express(); 

var jsonParser = bodyParser.json();

// If PORT exist use that, otherwise use 3000
var port = process.env.PORT || 3000;

app.listen(port);

book = {
    id: 0,
    title: 'Hans',
    year: '1401'
}
// database mockup!
var books = [book];

// Pattern matching on id using :id
app.get('/api/book/:id', (req,res) => {
    // get from database...
    var id = req.params.id;
    var book = findBook(id);
    if(book){
        res.json(book);
    }else{
        res.status(500);
         res.send('ops: ' + book);
    }

    res.send();
    
});

app.post('/api/book', jsonParser, (req, res) => {
        // save to the database 
        var book = req.body.book;  
        if(book && !findBook(book)){
            // book is not null
            // no book with id exists
            createBook(book);
            res.status(201);
        }else{
            res.status(500);
        }

        res.send();

});

app.delete('/api/book', jsonParser, (req, res) => {
        // delete from database

});

var findBook = function(id) {
    var book = null;
    
    books.forEach((bookItem) => {
        if(bookItem.id == id ){
            book = bookItem;
        }
    });

    return book;
}

var createBook = function(book) {
    if(!book || findBook(book.id)) return false;
    books.push(book);
    return true;
}

