function setup() {
	createCanvas(windowWidth, windowHeight);
	background('cornflowerblue');
}

function mousePressed() {
	drawCat(mouseX, mouseY);
}

function drawCat(xPos, yPos) {
	push();
	translate(xPos, yPos);
	let size = windowWidth / 4;
	noStroke();
	rotate(-HALF_PI);
	
	// left ear
	let x = (0.9 * size / 2) * cos(-QUARTER_PI);
	let y = (0.9 * size / 2) * sin(-QUARTER_PI);
	translate(x, y);
	rotate(5 * QUARTER_PI);
	fill('peachpuff');
	triangle(-0.15 * size, 0, 0.15 * size, 0, 0, (0.3 * size) * sqrt(3) / 2); // draw outer ear
	fill('salmon');
	triangle(-0.1 * size, 0, 0.1 * size, 0, 0, (0.2 * size) * sqrt(3) / 2); // draw inner ear
	rotate(-5 * QUARTER_PI);
	translate(-x, -y);
	
	// right ear
	x = (0.9 * size / 2) * cos(QUARTER_PI); 
	y = (0.9 * size / 2) * sin(QUARTER_PI);
	translate(x, y);
	rotate(7 * QUARTER_PI); 
	fill('peachpuff');
	triangle(-0.15 * size, 0, 0.15 * size, 0, 0, (0.3 * size) * sqrt(3) / 2); // draw outer ear
	fill('salmon');
	triangle(-0.1 * size, 0, 0.1 * size, 0, 0, (0.2 * size) * sqrt(3) / 2); // draw inner ear
	rotate(-7 * QUARTER_PI); 
	translate(-x, -y);
	rotate(HALF_PI);
	
    // face
	fill('peachpuff');
	translate(0, -0.08 * size);
	ellipse(0, 0, size, 0.8 * size); // draw face
	translate(0, 0.08 * size);
	
	// nose
	fill('salmon');
	let noseSize = 0.1 * size;
	ellipse(0, 0.15 * noseSize, noseSize, 0.8 * noseSize); // draw nose
	
	// mouth
    let mouthSize = 0.12 * size;
	noFill();
	stroke('black');
	strokeWeight(0.015 * size);
	translate(mouthSize / 2, mouthSize / 2);
	arc(0, 0, mouthSize, mouthSize, QUARTER_PI, PI); // right curve
	translate(-mouthSize, 0);
	arc(0, 0, mouthSize, mouthSize, 0, HALF_PI + QUARTER_PI); // left curve
	translate(mouthSize / 2, -mouthSize / 2)
	
	// eyes
    translate(0, -0.05 * size);
	noStroke();
	fill('black');
	let eyeSize = 0.12 * size
	translate(-0.18 * size, -0.08 * size); 
	ellipse(0, 0, eyeSize, eyeSize); // left eye
	translate(0.36 * size, 0);
	ellipse(0, 0, eyeSize, eyeSize); // right eye
	translate(-0.18 * size, 0.08 * size); 
	
	// whiskers
    // right whiskers
	translate(0.65 * (size / 2), size / 20); 
	rect(0, 0, size / 3, size / 75); // center whisker
	translate(0, -2 * size / 60);
	rotate(-QUARTER_PI / 3);
	rect(0, 0, size / 3, size / 75); // top whisker
	rotate(QUARTER_PI / 3);
	translate(0, 4 * size / 60);
	rotate(QUARTER_PI / 3);
	rect(0, 0, size / 3, size / 75); // bottom whisker
	rotate(-QUARTER_PI / 3);
	translate(-0.65 * (size / 2), -size / 60);
	
	// left whiskers
	translate(-0.65 * (size / 2), 0);
	rotate(-PI);
	translate(0, -size / 60);
	rect(0, 0, size / 3, size / 75); // center whisker
	translate(0, -2 * size / 60);
	rotate(-QUARTER_PI / 3);
	rect(0, 0, size / 3, size / 75); // bottom whisker
	rotate(QUARTER_PI / 3);
	translate(0, 4 * size / 60);
	rotate(QUARTER_PI / 3);
	rect(0, 0, size / 3, size / 75); // top whisker
	rotate(-QUARTER_PI / 3);
	translate(-0.65 * (size / 2), -2 * size / 60);
	pop();
}