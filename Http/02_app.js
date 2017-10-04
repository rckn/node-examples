var http = require("http");
var fs = require("fs");

var port = 1337;

http
  .createServer(function listener(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // html is buffer
    var html = fs.readFileSync(__dirname + "/02_index.htm");
    // response is a stream and that is why we can pass the buffer to it
    res.end(html);
  })
  .listen(port, "127.0.0.1", () => {
    console.log("server is running on port " + port);
  });
