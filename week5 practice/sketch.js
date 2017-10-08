let ball = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 1000; i++)
    ball[i] = new Ball();
}


function draw() {
  background(0);
  for (let i = 0; i < ball.length; i++) {
    ball[i].show();
    ball[i].move();
  }
}



class Ball {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(100, 200);
    this.g = random(100, 200);
    this.a = random(100, 200);
    this.speed = 0;
    this.gravity = 0.1;
  }

  show() {
    strokeWeight(2);
    stroke(this.r, this.g, 200, this.a);
    line(this.x, this.y, this.x, this.y + 10);
  }

  move() {
    this.y = this.y + this.speed;
    this.speed = this.speed + this.gravity;

    if (this.y > height) {
      this.speed = this.speed * -0.95;
      this.y = height;
    }
  }
}