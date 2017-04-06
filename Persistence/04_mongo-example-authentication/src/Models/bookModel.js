var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookModel = new Schema({
    title: String,
    author: String,
    year: String,
});
// Tells mongoose that we have a new schema called book
module.exports = mongoose.model("Book",bookModel);