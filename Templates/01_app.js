var express = require('express');

var app = express();

app.use('/assets', express
.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
});


app.listen(3000, () => {
    console.log(`listens on port 3000`);
})