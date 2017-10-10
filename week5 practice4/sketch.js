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
        }         
      }
}
      

class Button {
  constructor(x,y,h) {
    this.x = x;
    this.y = y;
    this.h = h;
  }
    
  show() {
      rectMode(CENTER);
    fill(93,143,158);
    noStroke();
    rect(this.x, this.y, this.h, this.h);
    fill(131,194,213);
    rect(this.x, this.y, this.h-10, this.h-10);
  }
}