// Controls direction of wheels, leds auto blink

var five = require("johnny-five");
var keypress = require("keypress");

// keypress(process.stdin);

var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(5);
  var led2 = new five.Led(6);
  var led3 = new five.Led(3);
  var lap = 0;

  var servo = new five.Servo.Continuous(10);
  var servo2 = new five.Servo.Continuous(11);
  var servoTail = new five.Servo.Continuous(9);

  this.repl.inject(
    {
      servo:servo,
      servo2:servo2,
      led: led,
      led2: led2,
      led3: led3,
      servoTail: servoTail

    }
  );


  led.blink();
  led2.blink();
  led3.blink();
  servoTail.ccw();


  console.log("Use Up and Down arrows for CW and CCW respectively. Space to stop.");

  // var servo = new five.Servo.Continuous(10);
  // var servo2 = new five.Servo.Continuous(11);

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", function(ch, key) {

    if (!key) {
      return;
    }

    if (key.name === "q") {
      console.log("Quitting");
      process.exit();
    } else if (key.name === "z"){
      console.log("reverse");
      servo.ccw();
      servo2.ccw();
      led3.on();
      led2.on();
      led.off();
    } else if (key.name === "x"){
      console.log("reverse");
      servo.cw();
      servo2.cw();
      led.on();
      led3.on();
      led2.off();
    } else if (key.name === "down") {
      console.log("CW");
      servo.cw();
      servo2.ccw();
      led.on();
      led2.on();
      servoTail.ccw(0);

    } else if (key.name === "up") {
      console.log("CCW");
      servo.ccw();
      servo2.cw();
      servoTail.ccw(1);

    } else if (key.name === "space") {
      console.log("Stopping");
      led.stop();
      led2.stop();
      led3.stop();
      servoTail.stop();
      servo.stop();
      servo2.stop();



    }
  });
});
