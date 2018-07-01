(function() {

  // setup canvas and other variables
  var canvas = document.getElementById('c');
  var ctx = canvas.getContext('2d');

  // setup global variables

  window.onload = function() {
    animate(canvas, ctx);
  };

  function animate(canvas, ctx) {

    // Set my center


    // Change the angle per frame


    // Create x, y coordinates on the circumference of a circle with _radius


    // Clear context
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set line color and alpha level
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(300, 200 + Math.random() * 150 + 10);
    ctx.stroke();
    ctx.closePath();


    // Draw line


    // Request new frame
    window.requestAnimationFrame(function() {
      animate(canvas, ctx);
    });
  }
})();
