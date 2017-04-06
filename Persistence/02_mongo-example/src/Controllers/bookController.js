module.exports = (book) => {

    return {
        getAllBooks: (req, res) => {
            console.log('finding books...');
            book.find({}, function (err, books) {
                if (err) return console.log(err);
                res.json(books);
            });
        }
    }
}