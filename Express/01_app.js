const express = require("express");

var app = express();

// If PORT exist use that, otherwise use 3000
var port = process.env.PORT || 3000;
//localhost:3000/
app.get("/", (req, res) => {
  // express will see that it is html
  res.send("<html><head></head><body><h1>Hello World!</h1></body></html>");
});
//localhost:3000/api/
app.get("/api", (req, res) => {
  // note: this is not json, it is a javascript object
  // that express will convert to json!
  res.json({ firstname: "Gert", lastname: "Hansen" });
});
// localhost:3000/book/1/
// Pattern matching on id using :id
app.get("/book/", (req, res) => {
  // express will see that it is html
  res.send(
    `<html><head></head><body><h1>Book: ${req.query.id}</h1></body></html>`
  );
});

// localhost:3000/book/1/
// Pattern matching on id using :id
app.get("/get/tasks", (req, res) => {
  // express will see that it is html
  var id = req.query.project_id;
  if (Number(id) === 3) {
    res.json({
      status: 1,
      data: [
        {
          project_name: "Ny server til Revision",
          project_id: 3,
          task_name: "Indk\u00f8b ny server",
          task_id: 14
        },
        {
          project_name: "Ny server til Revision",
          project_id: 3,
          task_name: "Installation af Windows server software",
          task_id: 15
        },
        {
          project_name: "Ny server til Revision",
          project_id: 3,
          task_name: "Ops\u00e6tning i rackskab",
          task_id: 17
        },
        {
          project_name: "Ny server til Revision",
          project_id: 3,
          task_name: "Test af server",
          task_id: 16
        }
      ]
    });
  } else {
    res.status(404);
    res.send();
  }
});

app.listen(port);
