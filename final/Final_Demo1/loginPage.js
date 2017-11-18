class BoardLogin{
  constructor() {
    this.x=windowWidth/2;
      this.y=(windowHeight/2)+(windowHeight/20);
      this.w=(windowWidth/6)*4;
      this.h=(windowHeight/6)*2;
  }
  
  show(){
  noStroke();
  fill('#fffff');
  rectMode(CENTER);
  rect(this.x,this.y,this.w,this.h);
  }
}

class ButtonLogin{
 constructor(){
 this.x=windowWidth/2;
   this.y=(windowHeight/2)+(windowHeight/30)*7;
   this.r=windowWidth/10;
 }
 
 show(){
   noStroke();
   fill('#f08c8e');
   ellipseMode(CENTER);
   ellipse(this.x,this.y,this.r,this.r);
 }
}


class InputName{
constructor(ws){
  this.x=
  this.y=
  this.w=
  this.h=
  this.words=ws;
}
  
  show(){
  fill('#cdcdcd');
    rect(this.x, this.y,this.w,this.h);

  
  
  }
  
  
  
}
