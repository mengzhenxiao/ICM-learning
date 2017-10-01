var star = [];
var z;


function setup() {
  createCanvas(800, 600)
  for (var i = 0; i < 800; i++) {
    star[i] = new Star();
  }
}



function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < star.length; i++) {
    star[i].show();
  }

}


function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);


  this.show = function() {
    //make the speed change with the mouseX
    this.speed = map(mouseY, 0, height, 30, 5);
    this.z = this.z - this.speed;

    //when stars come to the front, draw more stars.
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }

    //draw the stars & add its move
    fill(255);
    noStroke();
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    this.r = map(this.z, 0, width, 8, 0);
    ellipse(this.sx, this.sy, this.r, this.r);

  }
}