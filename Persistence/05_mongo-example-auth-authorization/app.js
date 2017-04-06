const mongoose = require('mongoose'),
 express = require('express'),
 bodyParser = require('body-parser'),
 bookRouter = require('./src/Routes/bookRouter'),
 userRouter = require('./src/Routes/userRouter'),
 app = express(),
 authenticationRouter = require('./src/Routes/authenticationRouter')(app);
 

// not sure if we need the urlencoded part
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// app.set is a way to access the express global settings
app.set('superSecret', 'welovenodejs');

// When the app start up we also connect to the database
// Everytime we use a model, we will require moongose, and require is casched
// so the connection is shared among all instances using const mongoose = require('mongoose')
mongoose.connect('mongodb://nodeuser:nodeuser123@ds145230.mlab.com:45230/rasckdb');

app.use('/api', authenticationRouter)
app.use('/api/user', userRouter);
app.use('/api/book', bookRouter);

app.listen(3000, () => {
    console.log('Listens on port 3000');
});