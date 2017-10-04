var async = require('async');
var fs = require('fs');
var archiver = require('archiver');
var rq = require('request');
const CANVASTOKEN =
    "4718~w5yDtqHQmfRJi2D2IBOs13NOFnXytakMrPJmxM2eiLTCOAgX3MEkZvINA3U242z5";

const streamRequest = (url, token) => {
    // request
    //   .get('http://mysite.com/doodle.png')
    //   .on('error', function(err) {
    //     console.log(err)
    //   })teWriteStream('doodle.png'))

    return rq.get(url, {
        auth: {
            bearer: token || CANVASTOKEN
        }
    }).on('error', function (err) {
        console.log(err);
    });
};
// fileLinks should contain: name, url and size
function zipURLs(fileLinks, outStream, token) {
    var zipArchive = archiver.create('zip');
    async.eachLimit(fileLinks, 3, function (file, done) {
        var stream = streamRequest(file.download_url, token);

        stream.on('error', function (err) {
            return done(err);
        }).on('end', function () {
            return done();
        });

        // Use the last part of the URL as a filename within the ZIP archive.
        //  zipArchive.append(stream, { name: url.replace(/^.*\//, '') });
        zipArchive.append(stream, { name: file.name });
    }, function (err) {
        if (err) throw err;
        zipArchive.finalize();
        zipArchive.pipe(outStream);
    });
}

function test() {
    try {
        var writable = fs.createWriteStream(__dirname + '/allineone.zip');

        zipURLs([
            //{ download_url: 'https://ucn.instructure.com/files/382005/download?download_frd=1&verifier=7O5lPQaJasDwwjGr2joNUTiWBZFwqk5UmLPC61pS', name: 'Test+Summary.pptx', size: 4617482 },
            { download_url: 'https://ucn.instructure.com/files/382006/download?download_frd=1&verifier=w8cqxzkJMHS7Fo9VCt1A8T2PR8ZYCa8D6Attev0y', name: 'Verfication+vs+validation.docx', size: 481538 },
        ], writable);
    } catch (error) {
        console.log(error);
    }

}

/*{ name: 'Test+Summary.pptx',
    size: 4617482,
    download_url: 'https://ucn.instructure.com/files/382005/download?download_frd=1&verifier=7O5lPQaJasDwwjGr2joNUTiWBZFwqk5UmLPC61pS' },
  { name: 'Verfication+vs+validation.docx',
    size: 481538,
    download_url: 'https://ucn.instructure.com/files/382006/download?download_frd=1&verifier=w8cqxzkJMHS7Fo9VCt1A8T2PR8ZYCa8D6Attev0y' } */

test();