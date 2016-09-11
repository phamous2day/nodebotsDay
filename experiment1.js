var five = require("johnny-five"),
  board, potentiometer;
var board = new five.Board();

board.on("ready", function() {
  var servo = new five.Servo({
     id: "MyServo",     // User defined id
     pin: 10,           // Which pin is it attached to?
     type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
     range: [0,180],    // Default: 0-180
     fps: 100,          // Used to calculate rate of movement between positions
     invert: false,     // Invert all specified positions
     startAt: 90,       // Immediately move to a degree
     center: false,      // overrides startAt if true and moves the servo to the center of the range
     specs: {           // Is it running at 5V or 3.3V?
       speed: five.Servo.Continuous.speeds["@5.0V"]
     }
   });




  potentiometer = new five.Sensor({
    pin: "A3",
    freq: 250
  });

  // Add servo to REPL (optional)
  this.repl.inject({
    servo: servo,
    pot: potentiometer
  });




  potentiometer.on("data", function() {
    console.log(this.value, this.raw);
  });

  // servo.sweep();
});
