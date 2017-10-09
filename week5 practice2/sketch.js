let bubble = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    bubble[i] = new Bubble();
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].show();
    bubble[i].move();
  }
}

function mousePressed() {
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].mouseClicked();
  }
}

class Bubble {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = 30;
    this.col = (200);
    this.on = false;
    //this.d=dist(mouseX,mouseY,this.x,this.y);
  }

  show() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    if (this.on) {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    }
  }

  mouseClicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 15) {
      this.on = !this.on;
      this.col = color(200, 100, 50, 200);
    }
  }
}