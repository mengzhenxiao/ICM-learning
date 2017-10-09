let balls = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 10; i++) {
    balls[i] = new Ball(random(width), random(height), 40);
  }
}


function draw() {
  background(0);
  for (let i = 0; i < balls.length; i++) {
    balls[i].show();
    balls[i].move();
    for (let j = 0; j < balls.length; j++) {
      if (j != i && balls[j].intersects_1(balls[i])) {
        balls[j].change_1();
        balls[i].change_1();
      }
    }
  }
}



class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
    
  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  intersects_1(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d <= 40) {
      return true;
    } else {
      return false;
    }
  }

  change_1() {
    this.r = 20;
  }
}