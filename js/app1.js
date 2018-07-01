/*
Start by grabbing the canvas using this selector to get the canvas with the ID of c from the body.
*/
var c = document.querySelector('#c');

/*
From the canvas, we need to grab it's context.
Call the method .getContext() on the canvas we created and we pass in the parameter for 2d.
*/
var ctx = c.getContext('2d');

/*
Start by creating a new image.
*/
var image = new Image();

/*
Images in JS get loaded asynchronously.
That means we have to do work after it's loaded.
So we'll set the onload function to what you see there.
*/
image.onload = function() {
  console.log('Loaded image');
  /*
  This is what will happen after the image is loaded.
  Now grab the ctx from above and call the drawImage method on it.
  The drawImage() will pass the image itself, along with it's starting coordinates (x, y), and it's width and height.
  Notice how width and height are set to the same values from the canvas itself inside the DOM (the canvas element in the HTML file).
  */
  ctx.drawImage(image, 0, 0, c.width, c.height);

  /*
  Calling toDataURL on c which is the canvas object in the HTML.
  From a terminal, run: python -m SimpleHTTPServer 8000
  From the browser, go to: http://localhost:8000
  */
  var savedImage = c.toDataURL();
  window.open(savedImage);
}

/*
Set the source of the image file.
*/
image.src = 'img/word.jpg';
