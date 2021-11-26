function setup() {//runs once
  createCanvas(windowWidth, windowWidth);
  fill('pink');
  strokeWeight (1);
}

function draw() {//runs in a loop
 
  
  var num = 20; //varible for the number of squares in the array 
  
   var sideLen = windowWidth/num; //variable for the side length of each square
  
  for(var y = 0; y < windowWidth; y = y + sideLen) { //loop to create a row of squares in the y direction
  for(var x = 0; x < windowWidth; x = x + sideLen) { //loop to create a row of squares in the x direction
  
      quad(x,y,
      x+ sideLen,y,
      x+ sideLen,y+ sideLen,
      x,y+ sideLen);
  }

}
  
}