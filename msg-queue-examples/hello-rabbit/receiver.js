// coiped from: https://github.com/rabbitmq/rabbitmq-tutorials/blob/master/javascript-nodejs/src/receive.js
// slightly modified

const amqp = require("amqplib/callback_api");

amqp.connect("amqp://rasck:rasck123@localhost", (err, conn) => {
  conn.createChannel((err, ch) => {
    const q = "hello";

    ch.assertQueue(q, { durable: false });
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(
      q,
      msg => {
        console.log(" [x] Received %s", msg.content.toString());
      },
      { noAck: true }
    );
  });
});
