class LoadCircle {
  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.r = 50;
  }

  show() {
    fill('#305f72');
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r);
  }
}

class LoadingCircle {
  constructor(r) {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.r = r;
  }

  show() {
    noFill();
    stroke('#ffffff');
    strokeWeight(10);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r);
  }

  change() {
    if (this.r < 40) {
      this.r = this.r + 1;
    } else {
      this.r = 0;
    }
  }
}