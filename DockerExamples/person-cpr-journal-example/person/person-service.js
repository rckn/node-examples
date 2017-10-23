const express = require("express");
const port = process.env.PORT || "3000";
const app = express();

const fakeDb = {
  persons: [
    {
      id: 0,
      fullname: "Hans Georg Andersen",
      cpr: 1293212039, // Dont use cpr to calc age...
      age: 11,
      journalId: 34
    },
    {
      id: 1,
      fullname: "Grethe Georg Andersen",
      cpr: 1293022038,
      age: 17,
      nearestRelative: 0,
      journalId: 21
    },
    {
      id: 2,
      fullname: "Berit Andersen",
      cpr: 1293282039,
      age: 61,
      nearestRelative: 3,
      journalId: 89
    },
    {
      id: 3,
      fullname: "Knud Hasting Andersen",
      cpr: 1653282349,
      age: 68,
      nearestRelative: 2,
      journalId: 01
    }
  ]
};

app.get("/api/person/:cpr", (req, res) => {
  timeOutWrapper(() => {
    try {
      const cpr = req.params.cpr;
      const person = fakeDb.persons.find(p => p.cpr === Number(cpr));
      res.json(person);
    } catch (error) {
      res.status(500).send("Internal Error: " + error);
    }
  });
});

app.get("/api/relative/:id", (req, res) => {
  timeOutWrapper(() => {
    try {
      const id = req.params.id;
      const relative = fakeDb.persons.find(p => p.id === Number(id));
      res.json(relative);
    } catch (error) {
      res.status(500).send("Internal Error: " + error);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// HelperMethods

// cb is a callback, a function, that will be called after a random timeout
function timeOutWrapper(cb) {
  setTimeout(cb, getRandom());
}

function getRandom() {
  return getRandomArbitrary(1000, 6000);
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
