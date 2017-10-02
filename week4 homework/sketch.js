var star = [];
//var otherstar = [];
var z;
var img;
var img2;
var d=8;
var blue;

var a;
var b;


//loadimage
function preload() {
  img = loadImage("spaceship1.png");
  img2 = loadImage("stars.png");
}


function setup() {
  createCanvas(800, 600)
  for (var i = 0; i < 800; i++) {
    //make a star array, and the array is a star function.
    star[i] = new Star();
  }
}


function draw() {
  //background change
  blue=map(mouseY, 0,height,54,14);
  background(26,28,blue);

  //call the star show function
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < star.length; i++) {
    star[i].show();
  }
  pop();

    
  //spaceship
  image(img, mouseX - 50, mouseY - 50);
  a=map(mouseY-300,0,300,10,50);
  
    
  //make the spaceship open fire
  if(keyIsPressed==true){   
      if(mouseY<=width/2-100){
          b=-60;
      }else{
          b=10;
      }
  shot(mouseX,mouseY-b);
  shot(mouseX,mouseY-b-a);
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
    this.l=map(mouseY-300,0,300,5,30);
    stroke(255);
    strokeWeight(2);
    if(d<30){
        d=d+1;
        line(x, y-d, x, y-this.l-d);
             }else {   
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
    //image(img2, this.sx, this.sy);
  }
}

