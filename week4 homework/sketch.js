var star = [];
var z;
var img;
var d=8;
var blue;


//loadimage
function preload() {
  img = loadImage("spaceship1.png");
}


function setup() {
  createCanvas(800, 600)
  for (var i = 0; i < 800; i++) {
    //make a star array, and the array is a star function.
    star[i] = new Star();
  }
}


function draw() {
  blue=map(mouseY, 0,height,54,14);
  background(26,28,blue);

  push();
  translate(width / 2, height / 2);
  //loop the star show function
  for (var i = 0; i < star.length; i++) {
    star[i].show();
  }
  pop();

  //spaceship
  image(img, mouseX - 50, mouseY - 50);
  
  //make the spaceship open fire
  if(keyIsPressed==true){
  shot(mouseX,mouseY-10);
  shot(mouseX,mouseY-30);
  } 

  intext();
 
}

function intext(){
    fill(255,100)
    noStroke();
    textSize(32);
text("Press A Key To Open Fire", 200, 500);
}



function shot(x,y){
    fill(255);
    stroke(200);
    if(d<20){
        d=d+1;
        line(x, y-d, x, y-5-d);
             }else{
                 d=5;
             }
}
   

//the whole star funtion
function Star() {
  //make main variables
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);

  //this funtion draw the stars and make them move
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