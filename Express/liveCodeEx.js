var express = require('express');

var app = express();

app.get('/', function(req,res) {
    res.send('<html><head></head><body><h1>Hello</h1></body></html>');
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});
