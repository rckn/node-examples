var mongoose = require('mongoose');
 
mongoose.connect('mongodb://nodeuser:nodeuser123@ds145230.mlab.com:45230/rasckdb');

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    Year: String
});

var Book = mongoose.model('Book', bookSchema);

var harryPotter = Book({
    title: "C#",
    author: "Troelsen",
    year: 2016
})

harryPotter.save(function(err){
    if(err) console.log(err);

    console.log('succeded!');
})

// Query to find everything. 
// To be more specfic we would create a queiry in the curly brackets.
// Obs: save and find is async, so we cannot expect find to "find" the objects we are creating async
Book.find({}, function(err, books){
    if(err) return console.log(err);

    console.log(books);
});