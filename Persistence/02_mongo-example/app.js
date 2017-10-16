const mongoose = require("mongoose");
const express = require("express");
const bookRouter = require("./src/Routes/bookRouter");

const app = express();

// When the app start up we also connect to the database
// Everytime we use a model, we will require moongose, and require is casched
// so the connection is shared among all instances using const mongoose = require('mongoose')
mongoose.connect(
  "mongodb://nodeuser:nodeuser123@ds145230.mlab.com:45230/rasckdb"
);
// localhost:3000/api/book
app.use("/api/book", bookRouter);

app.listen(3000, () => {
  console.log("Listens on port 3000");
});
