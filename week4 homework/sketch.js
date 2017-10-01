var star = [];
var z;
var img;
var d=5;


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
  background(0);

  push();
  translate(width / 2, height / 2);

  //loop the star show function
  for (var i = 0; i < star.length; i++) {
    star[i].show();
  }
  pop();


  //image
  image(img, mouseX - 50, mouseY - 50);
  
  shot();
    

}

function shot(){
    fill(255);
    stroke(200);
    this.x=mouseX;
    this.y=mouseY-30;
    if(d<15){
        d=d+1;
        line(this.x, this.y-d, this.x, this.y-10-d);
             }else{
                 d=5;
             }
    
    //line(this.x, this.y-d, this.x, this.y-20-d);
    /*if (keyIsPressed == true){
        this.d=this.d++;
        line(this.x, this.y+this.d, this.x, this.y-20+this.d);
        
    }*/
  
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