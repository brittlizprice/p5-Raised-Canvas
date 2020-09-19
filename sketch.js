
var canv;

function setup() {
  //note that this doesn't scale that well for larger sizes
  canv = new RaisedCanvas(
    480, // real canvas width
    260, // real canvas height
    .1,  // buffer space
    createVector(.2,.1),  // light direction
    color(255,250,250), // background color
    color(236,239,240,240), // foreground color
    color(100),  //shadow color
    1, //blur amount, keep at 1 or 2 for speed
    false, //use mouse to update shadow
    true //clear background (leave true most cases)
  );

  canv.SetupCanvas();// does your canvas setup
  
  /*
  from here you can use canv.x or canv.y for (0,0)
  and canv.width and canv.height for width and height
  */
}

function draw() {
  canv.DrawCanvas(); // gives you the basic canvas
  
  if (true){
    canv.lightDirection = createVector(.2*sin(frameCount*.05),0.3);
  }
  
  fill(238,248,245);
  ellipse(canv.center.x, canv.center.y, canv.width,canv.height);
  
  fill(0);
  text("A simple blurred shadow for p5 canvases", canv.x + 10, canv.center.y);
}