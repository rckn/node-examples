var http = require("http");
var fs = require("fs");

http
  .createServer(function listener(req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(__dirname + "/01_index.htm").pipe(res);
    } else if (req.url === "/api/person") {
      res.writeHead(200, { "Content-Type": "text/json" });
      var obj = {
        firstname: "John",
        lastname: "Doe"
      };
      // try without JSON.stringify, maybe using toString...
      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(1338, "127.0.0.1");
