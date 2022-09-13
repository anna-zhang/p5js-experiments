var pencilSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  getPencilSize();
  var newPencil = new Pencil(windowWidth * 0.35, windowHeight * 0.7);
  newPencil.draw();
}

function getPencilSize() {
  if (windowWidth < windowHeight) {
    pencilSize = windowWidth * 0.1;
  } else {
    pencilSize = windowHeight * 0.1;
  }
}

class Pencil {
  constructor(x, y) {
    this.x = x + pencilSize * 5;
    this.y = y - pencilSize * 5.6;
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(PI / 4);

    noStroke();

    // eraser
    fill("palevioletred");
    rect(0, 0, pencilSize, pencilSize, pencilSize * 0.2);

    // eraser holder
    fill("silver");
    rect(0, pencilSize * 0.6, pencilSize, pencilSize * 0.4);
    fill("darkgray");
    rect(0, pencilSize * 0.6 + pencilSize * 0.15, pencilSize, pencilSize * 0.1);

    // pencil stick
    fill("goldenrod");
    rect(0, pencilSize, pencilSize, pencilSize * 6);
    fill("darkgoldenrod");
    rect(0.25 * pencilSize, pencilSize, pencilSize * 0.1, pencilSize * 6);
    rect(0.65 * pencilSize, pencilSize, pencilSize * 0.1, pencilSize * 6);

    // wood tip
    fill("tan");
    triangle(
      0,
      pencilSize * 7,
      pencilSize,
      pencilSize * 7,
      pencilSize * 0.5,
      pencilSize * 8
    );

    // graphite tip
    fill("dimgray");
    triangle(
      pencilSize * 0.3,
      pencilSize * 7.6,
      pencilSize * 0.7,
      pencilSize * 7.6,
      pencilSize * 0.5,
      pencilSize * 8
    );

    pop();
  }
}
