let ball;

function setup() {
  createCanvas(400, 400);
  ball = new Ball(200, 200);
}


function draw() {
  background(255);
  ball.show();
  ball.move();

}


class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.gravity = 0.1;
  }

  show() {
    fill(175);
    stroke(0);
    ellipse(this.x, this.y, 10, 10);
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