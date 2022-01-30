function setup() {
	createCanvas(windowWidth, windowHeight);
	background('darkcyan');
}

function mousePressed() {
	drawFlower(mouseX, mouseY); // draw flower on mouse click
}

function drawFlower(x, y) {
	push();
	translate(x, y);
	noStroke();
	fill('white'); // white petals
	let numPetals = 9; // number of flower petals per flower
  	for (let i = 0; i < numPetals; i ++) {
        ellipse(0, 40, 20, 80); // draw petal
        rotate(TWO_PI / numPetals);
  	}
	fill('orange'); // orange center
	ellipse(0, 0, 30, 30); 
	pop();
}