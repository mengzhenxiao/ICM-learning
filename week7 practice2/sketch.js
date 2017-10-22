var weatherS;
var weatherN;
var api = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=';
var mode = '&mode=json';
var units = '&units=metric';
var cnt = '&cnt=7';
var appid = '&APPID=001b0f58045147663b1ea518d34d88b4';


var input1;
var input2;


function setup() {
  createCanvas(400, 400);
  var button1 = select('#submit1');
  var button2 = select('#submit2');

  button1.mousePressed(weatherAsk1);
  button2.mousePressed(weatherAsk2);
  input1 = select('#city1');
  input2 = select('#city2');

  rectMode(CENTER);
  textAlign(CENTER);
}

function weatherAsk1() {
  var url1 = api + input1.value() + mode + units + cnt + appid;
  //var url2=api+input2.value()+mode+units+cnt+appid;
  loadJSON(url1, gotData1);
  //loadJSON(url2, gotData2);
}


function weatherAsk2() {
  //var url1=api+input1.value()+mode+units+cnt+appid;
  var url2 = api + input2.value() + mode + units + cnt + appid;
  //loadJSON(url1, gotData1);
  loadJSON(url2, gotData2);
}

function gotData1(data) {
  weatherS = data;
}

function gotData2(data) {
  weatherN = data;
}

function draw() {
  background(220);
  lines();
  data();
}


function data() {
  if (weatherS) {
    for (var i = 0; i < weatherS.list.length; i++) {
      fill(0, 0, 200);
      noStroke();
      ellipse(60 + i * 50, 300 - (weatherS.list[i].temp.day * 5), 10, 10);
      rect(280, 50, 30, 10);
      text(weatherS.city.name, 330, 55);
    }
    for (var h = 0; h < weatherS.list.length - 1; h++) {
      stroke(0, 0, 200);
      line(60 + h * 50, 300 - (weatherS.list[h].temp.day * 5), 60 + (h + 1) * 50, 300 - (weatherS.list[h + 1].temp.day * 5));
    }
  }

  if (weatherN) {
    for (var j = 0; j < weatherN.list.length; j++) {
      fill(0, 200, 0);
      noStroke();
      ellipse(60 + j * 50, 300 - (weatherN.list[j].temp.day * 5), 10, 10);
      rect(280, 70, 30, 10);
      text(weatherN.city.name, 330, 75);
    }
    for (var k = 0; k < weatherN.list.length - 1; k++) {
      stroke(0, 200, 0);
      line(60 + k * 50, 300 - (weatherN.list[k].temp.day * 5), 60 + (k + 1) * 50, 300 - (weatherN.list[k + 1].temp.day * 5));
    }
  }

}


function lines() {
  stroke(126);
  fill(0);
  line(40, 300, 380, 300);
  line(40, 300, 40, 100);
  for (var g = 0; g < 8; g++) {
    text(g * 5, 30, 300 - g * 25);
  }
  text("Today", 60, 320);
  text("7 days before", 340, 320);
  text("Celsius", 40, 80);
}