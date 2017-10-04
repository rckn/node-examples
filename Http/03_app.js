var http = require("http");
var fs = require("fs");

http
  .createServer(function listener(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // by default a buffer gets returned (see 02_app.js)
    // by saying utf8 we indicate we want a string!
    // var html = fs.readFileSync(__dirname + "/03_index.htm", "utf8");

    fs.readFile(__dirname + "/03_index.htm", (err, data) => {
      var message = "Hello http!...";
      var html = data.toString();
      // html = html.replace("{Message}", message);
      res.end(html);
    });
  })
  .listen(1337, "127.0.0.1");
