var fs = require('fs');
var JSONStream = require('JSONStream');
var es = require('event-stream');

var getClientSync = (id) => {
    
    var file = fs.readFileSync(__dirname + `/Clients/${id}.json`,'utf8');

    var client = JSON.parse(file);

    return client
}

module.exports.getClientSync = getClientSync;

var getClient = function(id, cb) {

    fs.readFile(__dirname + `/Clients/${id}.json`,'utf8',(err, data) => {
            if(err) return cb(err);
            var client = JSON.parse(data);
            cb(null, data);
    });
}

module.exports.getClient = getClient;


// This is a work in progress does not work yet!
var getStreamClient = (id, cb) => {
    var readStream = fs.createReadStream(__dirname + `/Clients/${id}.json`);
    var parser = JSONStream.parse('.Name');
    readStream
    .pipe(parser)
    .pipe(es.map(data => {
        cb(null,data);
    }));
}

module.exports.getStreamClient = getStreamClient;


