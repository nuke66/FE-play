console.log("slider-test() fired");

$('input[type="range"]').rangeslider({
        polyfill: false,
        onInit: function() {
          console.log("fired");
        }
      })
      .on('input', function() {
          console.log("fired");
      });