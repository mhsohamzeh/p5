
// Position and size variables for the blackboard
var posX = 50;
var posY = 500;
var bbWidth = 200;
var speedY = 13;
var speedX = 0;
var gravity = 5;
//rect1
var posX1 = 500;
var posY1 = 10;
var width1 = 100;
var hight1 = 300;
//rect2
var posX2 = 500;
var posY2 =500;
var width2 = 100;
var hight2 = 300;
var score = 0

function setup() {
 createCanvas(600,800);

}

function draw() {
  background(250);
  //Pipes
  fill(250)
  stroke(random(255), random(255), random(255));
  //top bar
rect(posX1,posY1,width1,hight1);
//bottom bar
rect(posX2,posY2,width2,hight2);
if(posX < posX2 + width2 && posX > posX2 && posY < posY2 + hight2&& posY > posY2){
  posY = posY + speedY;
  posY2 = posY2 - speedY2;
}
if(posX < posX1 + width1 && posX > posX1 && posY < posY1 + hight1 && posY > posY1){
  posY = posY + speedY;
  posY1 = posY1 - speedY1;
}


//Border
 if( posY > height ){
   posY = posY + speedY;
   posY2 = posY2 - speedY2;
}
if(posY < 0){
  posY = posY + speedY;
  posY2 = posY2 - speedY2;
}

  // draw a blackboard for writing on
  stroke(random(255), random(255), random(255));
  strokeWeight(6);
  fill(255);
  ellipse(posX,posY,50,50);
  text(score,50,50);
  if (keyIsPressed === true && key === ' '){
    posY = posY - speedY;
  }
posY = posY + gravity

if( posX > posX2 ){
  score= score + 1;
}

posX2 = posX2 - 5;
posX1 = posX1 - 5;
// speed for the ball
if(posX2 + width2 < 0){
  posX2 = width
  if(posX1 + width2<0)
  posX1 = width
// this code is for the ball to stop going out
if(posY<= 0 || posY>=height){
  speedY = - speedY;
  gravity = -gravity;
}

 }
}
