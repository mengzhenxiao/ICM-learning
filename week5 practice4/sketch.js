let button = [];

function setup() {
  createCanvas(540, 540);
}


function draw() {
  background(0);
        for (let i = 0; i < 8; i++) {
        for (var o = 60; o <= 520; o = o + 60) {
            button[i] = new Button(i*60+60,o,30);
            button[i].show();
            button[i].mouseClicked();
            
        } 
            
      }
}

//function mousePressed() {
  //for (let i = 0; i < button.length; i++) {
   // button[i].mouseClicked();
  //}
//}
      

class Button {
  constructor(x,y,h) {
    this.x = x;
    this.y = y;
    this.h = h;
      this.colf=color(131,194,213);
      this.colb=color(93,143,158);
  }
    
  show() {
      rectMode(CENTER);
    fill(this.colb);
    noStroke();
    rect(this.x, this.y, this.h, this.h);
    fill(this.colf);
    rect(this.x, this.y, this.h-8, this.h-8);
   
  }
 

     
   
      mouseClicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 15) {
      this.col = color(200, 100, 50, 200);
    }
     
     
 }
    
