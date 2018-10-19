
function setup() {
  createCanvas(1000, 900);  // create a square window for drawing

}

function draw() {
  // This function does nothing, but it must exist.
rect(mouseX,mouseY,200,200);
rect(mouseX,mouseY,-200,-200);
}

function mouseMoved() {

}

function mouseClicked() {
  fill(random(255), random(255), random(255));
}
