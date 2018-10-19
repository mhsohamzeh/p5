function setup() {
  createCanvas(1000,1000);  // create a square window for drawing

}

function draw() {
  // This function does nothing, but it must exist.
  // bottom circle
  ellipse(mouseX,mouseY,150,150);
  rect(mouseX,mouseY,-150,150);
  rect(mouseX,mouseY,150,-150);
  
}
function mouseDragged() {
  // This function is called whenever the mouse is moved
  fill(random(250), random(250), random(250))

}
