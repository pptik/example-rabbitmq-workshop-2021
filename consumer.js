let amqp = require('amqplib/callback_api');
amqp.connect({ 
    protocol: 'amqp',
    hostname: 'rmq2.pptik.id',
    port: '5672',
    username: '',
    password: '',
    vhost: '/' 
}, function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    var queue = 'antrian_makanan';
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function(msg) {
    console.log(" [x] Received %s", msg.content.toString());
    }, {
        noAck: true
    });
  });
});