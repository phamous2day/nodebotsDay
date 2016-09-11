var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(5);
  var led2 = new five.Led(6);
  var led3 = new five.Led(3);


  this.repl.inject({
    led: led,
    led2: led2,
    led3: led3
  });
  led.blink();
  led2.blink();
});


// var five = require("johnny-five");
// var board = new five.Board();
//
// board.on("ready", function() {
//   var array = new five.Leds([11, 10, 6]);
//
//   array.pulse();
// });
