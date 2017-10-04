var http = require("http");

// provide an eventlistener
// if you go to _http_server.js you would see
// that the server emits request and responses
// each time that happens our Listener will be called:
http
  .createServer(function listener(req, res) {
    // uses the plain text mime Type
    // browser will not try to render as html
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world!\n");
  })
  .listen(1340, "127.0.0.1");
// We can see the request respone in chrome in the
// f12 developer tools -> networkno
