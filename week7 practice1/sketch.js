var data;

function preload(){
  data=loadJSON("color.json")
}

function setup() { 

  createCanvas(400,400);
} 

function draw() { 

  noStroke();
  for(var i=0; i<data.colors.length;i++){
  fill(data.colors[i].hex);
  var y=i*40+40;
    rectMode(CENTER);
  rect(100,y,20,20);
      textSize(10);
      text(data.colors[i].color, 150, y);
  }
}

