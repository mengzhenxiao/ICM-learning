let balls = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 10; i++) {
    balls[i] = new Ball(random(width), random(height), 80);
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
        if (j != i && balls[j].intersects_2(balls[i])) {
        balls[j].change_2();
        balls[i].change_2();
      }
    }
  }
}



class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = (255,200);
  }
    
  show() {
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  intersects_1(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (50<d&&d <= 80) {
      return true;
    } else {
      return false;
    }
  }

   intersects_2(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d <= 50) {
      return true;
    } else {
      return false;
    }
  }
    
  change_1() {
    this.r = 50;
    this.col = color(131,194,213,200);
    
  }
    
  change_2(){
      this.r=20;
    this.col = color(216,180,229,200);
  }
}