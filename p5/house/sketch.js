var houseWidth = 200
var roofHeight = houseWidth/3
var houseWidth2 = houseWidth/5
var roofHeight2 = houseWidth2/3

function setup() {
	createCanvas(800, 800);
}

function draw() {

	rect(width / 2, height / 2, houseWidth, houseWidth / 2);
	triangle(width / 2, height / 2, width / 2 + houseWidth / 2, height / 2 - roofHeight, width / 2 + houseWidth, height / 2);
	rect(width / 2, height / 2, houseWidth2, houseWidth2 / 2);
	triangle(width / 2, height / 2, width / 2 + houseWidth2 / 2, height / 2 - roofHeight2, width / 2 + houseWidth2, height / 2);
}
