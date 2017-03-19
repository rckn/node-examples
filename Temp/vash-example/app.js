const express = require('express');

var app = express();

app.use('/assets', express
.static(__dirname + '/public'));

app.set('view engine', 'vash');

app.get('/', (req,res) => {
    res.render('index', {greeting: 'Hello Vash!', name: 'Hans' });
});


app.listen(3000, '127.0.0.1', () => {
    console.log(`listens on port 3000`);
})