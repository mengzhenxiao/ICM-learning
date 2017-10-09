let bubble[];

function setup(){
    createCanvas(400,400);    
    for(let i=0; i<10; i++){
        bubble[i]=new Ball();
    }
    
    
    
}



function draw (){
    background(255);
    bubble[i].show();
    bubble[i].move();
    
}


class Ball{
    constructior(){
        this.x=random(0,width);
        this.y=random(0,height);
        this.r=30;
        this.col=(200,100)
    }
    
    
    show(){
        fill(this.col);
        ellipse(this.x,this.y,this.r,this.r);
        
    }
    
    move(){
        this.x=this.x+random(-1,1);
        this.y=this.y+random(-1,1);    
    }
    
}