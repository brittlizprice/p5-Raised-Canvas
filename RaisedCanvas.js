function RaisedCanvas(fullWidth, fullHeight, canvasBuffer, lightDirection = createVector(.1,.1),
backgroundColor = color(255,255,255), 
canvasColor = color(236,239,240,200),
shadowColor = color(100,100,100),
blurAmount = 2,
useMouse = false,
clearBackground = true){
  this.canvasWidth = fullWidth;
  this.canvasHeight = fullHeight;
  this.x = this.canvasWidth * canvasBuffer; 
  this.y = this.canvasHeight * canvasBuffer;
  this.width = (this.canvasWidth - this.x - 1) * (1 - canvasBuffer);
  this.height = (this.canvasHeight - this.y - 1) * (1 - canvasBuffer);
  this.backgroundColor = backgroundColor;
  this.canvasColor = canvasColor;
  this.shadowColor = shadowColor;
  this.blurAmount = blurAmount;
  this.useMouse = useMouse;
  
  //needed for light calculation
  this.center = createVector(fullWidth*.5, fullHeight *.5);
  this.lightDirection = lightDirection;
  this.halfWidth = (fullWidth - 1) * .5; // for shadow length calc
  this.halfHeight = (fullHeight - 1) * .5;
  this.shadowOffset;
  
  //create canvas setup
  this.SetupCanvas = function() {
    push();
    createCanvas(this.canvasWidth,this.canvasHeight);
    this.shadowOffset = this.UpdateOffset(this.lightDirection);
    background(this.backgroundColor);
    pop();
  }
  
  this.UpdateOffset = function (d){
    var xOff = this.x * d.x;
    var yOff = this.y * d.y;
    return createVector(xOff,yOff);
  }
  
  this.UpdateDirection = function (p) {
    var dir = p.sub(this.center);
    var u = dir.x / this.halfWidth;
    var v = dir.y / this.halfHeight;
    
    return createVector(u,v);
  }
  
  
  this.DrawCanvas = function() {
    push();
    //clear the full background
    if(clearBackground) background(255);
    
    //clear just the canvas
    fill(255);
    rect(this.x,this.y,this.width,this.height);
    
    //Update shadow to mouse direction
    if (useMouse){
      this.lightDirection = this.UpdateDirection(createVector(mouseX,mouseY));
    }
    
      this.shadowOffset = this.UpdateOffset(this.lightDirection);
    
    //draw the shadow
    fill(this.shadowColor);
    rect(this.x + this.shadowOffset.x,this.y+this.shadowOffset.y, this.width, this.height);
    filter(BLUR,this.blurAmount); // this is the most expensive part
    
    //draw the canvas
    fill(this.canvasColor);
    rect(this.x,this.y, this.width, this.height);
    pop();
  }
}