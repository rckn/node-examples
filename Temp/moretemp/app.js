var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("<p>Hello World</p>");
});

var persons = [
  { id: 0, name: "Joe", age: 43 },
  { id: 1, name: "Hanna", age: 33 }
];

app.get("/api/person/:id", (req, res) => {
  var id = req.params.id;
  var person = persons[id];
  res.json(person);
});

app.post("api/person", (req,res) => {
    var person = req.body;
    persons.push(person);
})

app.listen(1337, () => {
  console.log("running on port 1337");
});
