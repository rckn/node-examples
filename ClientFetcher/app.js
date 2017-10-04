const clientfetchter = require("./clientFetcher");

//var client = clientfetchter.getClientSync(1);
// console.log(client.Name);
var callback = function(err, client) {
  if (err) return console.log(err);
  console.log(client.Name);
};
clientfetchter.getClient(1, callback);

var client = clientfetchter.getClient(2, (err, result) => {
  if (err) console.log(err);

  console.log(result);
});

// clientfetchter.getStreamClient(1, '*', (err, data) => {
//     if(err) console.log(err);

//     console.log(data);
// });
