'use strict';


let spi = require('spi-device'),

// The MCP3008 is on bus 0 and it's device 0
let spi_device = spi.open(0, 0, function (err) {
  // An SPI message is an array of one or more read+write transfers
  var message = [{
    sendBuffer: new Buffer([0x01, 0xd0, 0x00]), // Sent to read channel 5
    receiveBuffer: new Buffer(3),               // Raw data read from channel 5
    byteLength: 3,
    speedHz: 20000 // Use a low bus speed to get a good reading from the TMP36
  }];

  if (err) throw err;

  spi_device.transfer(message, function (err, message) {
    console.log(message);
  });
});
