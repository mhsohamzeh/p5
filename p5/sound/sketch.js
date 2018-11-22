var mysound
var img;
function preload(){
 img = loadImage("kisscc0-tom-cat-jerry-mouse-tom-and-jerry-cartoon-characte-tom-tom-and-jerry-5b4ec6f75e9de6.8274577815318893993876")
 mysound = loadSound ("AHHH!1")
}

function setup() {
  // put setup code here
  createCanvas(900,900)
}

function draw() {
  // put drawing code here
  image(img,9,9);
}
function mouseClicked(){
  mysound.play();
}
