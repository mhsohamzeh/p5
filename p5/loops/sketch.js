//position variables
var posX= 200;
var posY = 200;
var posX2= 200;
var posY2= 200;
// speed variables
var speedX = 0;
var speedY = 0;
var speedX2 = -10;
var speedY2 = -10;

function setup() {
createCanvas(600, 600);

  frameRate(60);
}

function draw() {
  background(0);
  fill (200,0,0)
  ellipse(posX, posY, 20, 20);
  fill (0,200,0)
  posX = posX + speedX;
  posY = posY + speedY;
  posX2 = posX2 + speedX2;
  posY2 = posY2 + speedY2;
  rect(posX2,posY2,25,25);
  speedY = speedY +0.2;
  speedY2 = speedY2 + 0.1;
  // New code for staying on the canvas
  if (posX > width) {    // the object has moved off the canvas to the right
      speedX = -speedX;
  }
  if (posX < 0) {    // the object has moved off the canvas to the left
      speedX = -speedX;
  }
  if (posY > height) {    // the object has moved off the canvas to the bottom
      speedY = -speedY;
  }
  if (posY < 0){
    speedY = -speedY;
  }
  // New code for staying on the canvas
  if (posX2 > width) {    // the object has moved off the canvas to the right
      speedX2 = -speedX2;
  }
  if (posX2 < 0) {    // the object has moved off the canvas to the left
      speedX2 = -speedX2;
  }
  if (posY2 > height) {    // the object has moved off the canvas to the bottom
      speedY2 = -speedY2;
  }
  if (posY2 < 0){
    speedY2 = -speedY2;
  }
}

function mouseClicked() {
  posX = mouseX;
  posY = mouseY;
  speedX = random(-10,15);
  speedY = random(-10,15);
  posX2 = mouseX+10;
  posY2 = mouseY+10;
  speedX2 = random(-10,15);
  speedY2 = random(-10,15);
}
