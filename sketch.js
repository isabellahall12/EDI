let gif;
function preload() {
  gif = loadImage('assets/AiBG.gif');
}
//function setup() {
//image(gif, 0, 0);
//}

function setup() {//runs once
  createCanvas(windowWidth, windowHeight);
//  fill('pink');
//  strokeWeight (1);
}



function draw() {//runs in a loop


  background (255,255,255);

//image(gif, 0, 0);


  var num = 10; //varible for the number of squares in the array

   var sideLen = windowWidth/num; //variable for the side length of each square

  for(var y = 0; y < windowHeight; y = y + sideLen) { //loop to create a row of squares in the y direction
  for(var x = 0; x < windowWidth; x = x + sideLen) { //loop to create a row of squares in the x direction
image(gif,x,y, windowWidth/num,windowWidth/num);
//image(gif,x,y);
//windowWidth*0.8/num windowWidth*0.8/num)
}
}
  }
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
