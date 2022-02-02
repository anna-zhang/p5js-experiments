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
	fill(random(['white', 'lavender', 'mistyrose', 'lightcyan', 'lemonchiffon', 'lightpink', 'thistle'])); // vary petal colors
	let numPetals = int(random(8, 20)); // vary number of flower petals
  	for (let i = 0; i < numPetals; i ++) {
        ellipse(0, 40, 20, 80); // draw petal
        rotate(TWO_PI / numPetals);
  	}
	fill(random(['orange', 'gold', 'coral'])); // vary color of center
	ellipse(0, 0, 4 * numPetals, 4 * numPetals); // vary size of center depending on number of petals
	pop();
}