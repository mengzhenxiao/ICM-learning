let positiveData;
let positiveWords;
let author;
let order;
let myWrite;

let userInput;


function preload() {
positiveData = loadJSON("positivewords.json");
}

function setup(){
noCanvas();
userInput = select('#userInput');
userInput.changed(goWiki);
}

// function draw(){
//   order = random(0,2);
//   positiveWords = data.keywords[0].words[order].sentence;
//   author = data.keywords[0].words[order].author;
// }

function goWiki(){
  // let term = userInput.value();
  // console.log(term);

  order = floor(random(0,2.5));
  positiveWords = positiveData.keywords[0].words[order].sentence;
  author = positiveData.keywords[0].words[order].author;

   let myP1;
   let myP2;
   myP1 = createP(positiveWords);
   myP2 = createP(author);
   myWrite = createInput('Write down your positive energy!');
}
