var five = require("johnny-five");
var keypress = require("keypress");

// keypress(process.stdin);

var board = new five.Board();

board.on("ready", function() {
  var servo = new five.Servo.Continuous(10);
  var servo2 = new five.Servo.Continuous(11);
  this.repl.inject(
    {
      servo:servo,
      servo2:servo2,

    }
  );

  // process.stdin.resume();
  // process.stdin.setEncoding("utf8");
  // process.stdin.setRawMode(true);

  // process.stdin.on("keypress", function(ch, key) {
  //
  //   if (!key) {
  //     return;
  //   }
  //
  //   if (key.name === "q") {
  //     console.log("Quitting");
  //     process.exit();
  //   } else if (key.name === "up") {
  //     console.log("CW");
  //     servo.cw();
  //     servo2.ccw();
  //   } else if (key.name === "down") {
  //     console.log("CCW");
  //     servo.ccw();
  //     servo2.cw();
  //   } else if (key.name === "space") {
  //     console.log("Stopping");
  //     servo.stop();
  //     servo2.stop();
  //   }
  // });
});
