var star = [];//star array
var img;//image of the spaceship
var offset=8;//offset of the Y position of each shot

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
  //background change
  var blue = map(mouseY, 0, height, 54, 14);
  background(26, 28, blue);

  //call the star show function
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < star.length; i++) {
    star[i].show();
  }
  pop();

  //spaceship
  spaceship();

  //text
  intext();

  //openfire
  openfire();
}


function intext() {
  fill(255, 100)
  noStroke();
  textSize(32);
  text("Press A Key To Open Fire", 200, 500);
}



function spaceship() {
  image(img, mouseX - 50, mouseY - 50);
}



function shot(x, y) {
  this.l = map(mouseY - 300, 0, 300, 5, 30);//the length of each shot
  stroke(255);
  strokeWeight(2);

  if (offset < 30) {
    offset = offset + 1;
  } else {
    offset = 8;
  }
    line(x, y - offset, x, y - this.l - offset);
}


function openfire() {
  this.a = map(mouseY - 300, 0, 300, 10, 50); //distance between the two shots

  //call the shot funtion
  if (keyIsPressed == true) {
    if (mouseY <= width / 2 - 100) {
      this.b = -60;
    } else {
      this.b = 10;
    }
    shot(mouseX, mouseY - this.b);
    shot(mouseX, mouseY - this.b - this.a);
  }
}



class Star {
  //make main variables
    
    constructor(){
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
    }

  //this funtion draw the stars and make them move
  show () {
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
      
    //make a crash
      /*for(var p=0; p < star.length; p++;){
          if(mouseX == this.sx){
          fill(100,100,100);
          
      }else{
          fill(255);
      }
      }*/
      
    ellipse(this.sx, this.sy, this.r, this.r);
  }
}

