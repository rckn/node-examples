const mongoose = require('mongoose'),
 express = require('express'),
 bodyParser = require('body-parser'),
 bookRouter = require('./src/Routes/bookRouter');

mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json())

// When the app start up we also connect to the database
// Everytime we use a model, we will require moongose, and require is casched
// so the connection is shared among all instances using const mongoose = require('mongoose')
mongoose.connect('mongodb://nodeuser:nodeuser123@ds145230.mlab.com:45230/rasckdb');

app.use('/api/book',bookRouter);

app.listen(3000, () => {
    console.log('Listens on port 3000');
});