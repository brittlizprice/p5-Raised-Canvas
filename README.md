# p5-Raised-Canvas

![An image of a drop shadow with the words "A simple drop shadow canvas for p5"](https://github.com/jasonzli/p5-Raised-Canvas/blob/main/raised_canvas.png)

This is a simple p5 extension to make raised canvases in P5, giving sketches a bit more depth.

## How to Use

1. Include the RaisedCanvas.js in the index page
2. Create any global variable that references RaisedCanvas(), *var canv = RaisedCanvas()*
3. Fill the RaisedCanvas() with parameters to your liking. 

### Parameters

Parameters for this script go in this order, the only necessary ones are the first three. There are default behaviors for the rest.

* (float) width - the real width of the canvas
* (float) height - the real height of the canvas
* (float) buffer - the buffer around the canvas that you will draw on
* (vector) light direction - the direction of the shadow, defaults towards the bottom right
* (color) background color - the color of the background, defaults to white
* (color) foreground color - the color of the raised foreground canvas, defaults to grey
* (color) shadow color - the color of the shadow, defaults to a mid black
* (int) blur amount - how much blur to use, defaults to 1. *be aware things will slow down at higher numbers
* (bool) use mouse - whether to use the mouse or not to update the light direction
* (bool) clear background - whether or not to clear the background

### Sketch Example Code

The basics of how to use this are in the sketch.js

# Happy sketching!