// Initialize dependencies
const express = require("express");
const port = process.env.PORT || "3000";
// setup web server
const app = express();
// in memory database using arrays
const fakeDb = {
  journals: [
    {
      id: 34,
      hasNewIllness: false
    },
    {
      id: 21,
      hasNewIllness: true
    },
    {
      id: 89,
      hasNewIllness: false
    },
    {
      id: 1,
      hasNewIllness: false
    }
  ]
};
// setup routes
app.get("/api/journal/:journalId", (req, res) => {
  timeOutWrapper(() => {
    try {
      const journalId = req.params.journalId;
      const journal = fakeDb.journals.find(j => j.id === Number(journalId));
      res.json(journal);
    } catch (error) {
      res.status(500).send("Internal Error: " + error);
    }
  });
});
// start web server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// HelperMethods

// cb is a callback, a function, that will be called
// after a random timeout
function timeOutWrapper(cb) {
  setTimeout(cb, getRandom());
}

function getRandom() {
  return getRandomArbitrary(500, 4000);
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
