// Initialize dependencies
const express = require("express");
const port = process.env.PORT || "3000";
const bodyParser = require("body-parser");

// setup web server
const app = express();

// setup bodyparser to parse the http body into a json object on the req.body attribute
app.use(bodyParser.json());

// setup routes
app.post("/api/message", (req, res) => {
  try {
    // well... we don't actually send anything just fakse
    if (req.body && req.body.cpr && req.body.message) {
      setTimeout(() => {
        res.status(200).send("message has been send...");
      }, 3000);
    } else {
      throw new Error("Could not find either cpr or message or both");
    }
  } catch (error) {
    res.status(500).send("Internal Error: " + error);
  }
});
// start web server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
