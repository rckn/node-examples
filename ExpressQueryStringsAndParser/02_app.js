const express = require('express');
const bodyParser = require('body-parser');
var app = express(); 

// If PORT exist use that, otherwise use 3000
var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser
    .urlencoded({ extended: false});

var jsonParser = bodyParser.json();


app.listen(port);

app.get('/', (req, res) => {
    // express will see that it is html
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', (req,res) => {
    // note: this is not json, it is a javascript object
    // that express will convert to json!
    res.json({ firstname : 'Gert', lastname : 'Hansen' });
});

// Pattern matching on id using :id
app.get('/book', (req, res) => {
    // express will see that it is html
    res.send(`<html><head></head><body><h1>Book: ${req.query.id}</h1></body></html>`);
});


app.post('/book', urlencodedParser, (req, res) => {
     res.send(`<html><head></head><body><h1>Book: ${req.body.id}</h1></body></html>`);
})

app.post('/cd', jsonParser, (req, res) => {
     res.send(`<html><head></head><body><h1>CD: ${req.body.id}</h1></body></html>`);
});