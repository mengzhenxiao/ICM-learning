var loadC;
var loadingC;
var loginBoard;
var loginButton;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  loadC=new LoadCircle();
  loadingC=new LoadingCircle();
  loginBoard=new BoardLogin();
  loginButton=new ButtonLogin();

  
  var inp = createInput('');
  inp.input(myInputEvent);
} 

function draw() {
  smooth();
  // loadC.show();
  // loadingC.show();
  // loadingC.change();
  background('#568ea4');
  loginBoard.show();
  loginButton.show(); 
  
}

function myInputEvent(){
  console.log('you are typing: ', this.value());
}

