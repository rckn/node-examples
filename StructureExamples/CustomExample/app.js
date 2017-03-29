const express = require('express');
const booksController = require('./controllers/bookControllerApi');
const homeController = require('./controllers/homeController');

var app = express();

app.use('/assets', express
.static(__dirname + '/public'));

app.set('view engine', 'ejs');

homeController(app);

booksController(app);

app.listen(3000, '127.0.0.1', () => {
    console.log(`listens on port 3000`);
})