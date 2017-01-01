var gpio = require("pi-gpio");

gpio.open(16, "output", function(err) {		// Open pin 16 for output
  console.log('Selected pin 16 and set mode to output')
  gpio.write(16, 1, function() {			// Set pin 16 high (1)
    console.log('Set pin 16 output high')
    setTimeout(function(){
      console.log('Done waiting, closing the pin')
      gpio.close(16);						// Close pin 16
    }, 5000)

  });
});