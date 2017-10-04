var fs = require("fs");
var JSONStream = require("JSONStream");

var getClientSync = id => {
  var file = fs.readFileSync(__dirname + `/Clients/${id}.json`, "utf8");

  var client = JSON.parse(file);

  return client;
};

module.exports.getClientSync = getClientSync;
// int id, function cb
var getClient = function(id, cb) {
  fs.readFile(__dirname + `/Clients/${id}.json`, "utf8", (err, data) => {
    if (err) return cb(err);
    var client = JSON.parse(data);
    cb(null, client);
  });
};

module.exports.getClient = getClient;

// The purpose of the stream client is to fecth json data
// without buffering an entire json document, if it is not needed
// Through the searchParameter one can narrow down the json returned from the stream
var getStreamClient = (id, searchParameter, cb) => {
  try {
    // if no searchParameter provided, we return the entire json document '*'
    var searchParameter = searchParameter || "*";
    // waterMark -> our buffersize in number of bytes for each chunk. 1024 bytes = 1 kb.
    var readStream = fs.createReadStream(__dirname + `/Clients/${id}.json`, {
      highWaterMark: 16 * 1024
    });
    var parser = JSONStream.parse(searchParameter);
    readStream.pipe(parser).on("data", data => {
      // some dots to show each buffered object.
      // you will see that entire nested objects and arrays will get buffered (a bit of a gotcha)!
      console.log(".........................................................");
      cb(null, data);
    });
  } catch (error) {
    // wrap our callback into a setImmediate
    // we do this to make our callback is always
    // called asynchronoulsy.
    // Which make our clientFetcher api consistent
    setImmediate(cb(error));
  }
};

module.exports.getStreamClient = getStreamClient;
