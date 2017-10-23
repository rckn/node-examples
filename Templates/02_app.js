const express = require('express');

var app = express();

app.use('/assets', express
.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
});

// app.get('/book/:id', (req,res) => {
//     mongoose.find('id', (err, result) => {
        
//         res.render('book', { id: req.params.id });
//     });
    
// });

app.get('/book/:id', (req,res) => {
    mongoose.find('id', (err, result) => {
        
        res.render('book', { id: req.params.id });
    });
    
});


app.listen(3000, '127.0.0.1', () => {
    console.log(`listens on port 3000`);
})