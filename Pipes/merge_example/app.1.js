var async = require('async');
var fs = require('fs');
var archiver = require('archiver');
var ap = require('archiver-promise');
var rq = require('request');
const CANVASTOKEN =
    "4718~w5yDtqHQmfRJi2D2IBOs13NOFnXytakMrPJmxM2eiLTCOAgX3MEkZvINA3U242z5";

const archpromise = async (fileLinks, outStream, token) => {
    // Eventhough we use streams. One big gotcha is that the zip will 
    // still buffer up entire file(s) in memory before piping out the stream... :'(
    let zipArchive = ap('zip');

    for (var index = 0; index < fileLinks.length; index++) {
        var file = fileLinks[index];
        var stream = streamRequest(file.download_url, token);

        zipArchive.append(stream, { name: file.name });
    }
    zipArchive.pipe(outStream);
    await zipArchive.finalize();
}

const streamRequest = (url, token) => {
    return rq.get(url, {
        auth: {
            bearer: token || CANVASTOKEN
        }
    }).on('error', function (err) {
        console.log(err);
    });
};

function Download() {
    // This works!
    var stream = streamRequest('https://ucn.instructure.com/files/382005/download?download_frd=1&verifier=7O5lPQaJasDwwjGr2joNUTiWBZFwqk5UmLPC61pS', null);

    stream.on('error', function (err) {
        throw err;
    }).on('end', function () {
        console.log('stream ended!');
    });

    stream.pipe(fs.createWriteStream(__dirname + "/testDownload.pptx"));
}

async function testArchPromise() {
    try {
        var writable = fs.createWriteStream(__dirname + '/allineone.zip');

        await archpromise([
            { download_url: 'https://ucn.instructure.com/files/382005/download?download_frd=1&verifier=7O5lPQaJasDwwjGr2joNUTiWBZFwqk5UmLPC61pS', name: 'Test+Summary.pptx', size: 4617482 },
            { download_url: 'https://ucn.instructure.com/files/382006/download?download_frd=1&verifier=w8cqxzkJMHS7Fo9VCt1A8T2PR8ZYCa8D6Attev0y', name: 'Verfication+vs+validation.docx', size: 481538 },
        ], writable);
    } catch (error) {
        console.log(error);
    }

}
testArchPromise().then(() => console.log('done'));