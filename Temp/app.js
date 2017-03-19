var clientfetchter = require('./clientFetcher');

var client = clientfetchter.getClient(1, (err, result) => {
    if(err) console.log(err);

    console.log(result);
});

/*
clientfetchter.getStreamClient(1, (err, data) => {
     if(err) console.log(err);

    console.log(result);
});



// console.log(client);

// clientfetchter.getClient

console.log('done');