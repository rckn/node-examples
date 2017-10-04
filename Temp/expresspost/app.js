const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.get("/api/projects", (req, res) => {
  res.json({});
});

app.post("/api/projects", urlencodedParser, (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
