// Copied from: https://github.com/rabbitmq/rabbitmq-tutorials/blob/master/javascript-nodejs/src/send.js
// Slightly modified

const amqp = require("amqplib/callback_api");
amqp.connect("amqp://rasck:rasck123@localhost", function(err, conn) {
  if (err) return console.log("Could not connect. Error: " + err);
  conn.createChannel(function(err, ch) {
    var q = "hello";

    ch.assertQueue(q, { durable: false });
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q, new Buffer("Hello World!"));
    console.log(" [x] Sent 'Hello World!'");
  });
  setTimeout(function() {
    conn.close();
    process.exit(0);
  }, 500);
});
