let img;

function preload() {
  img = loadImage('assets/AiBGsingle.png');
}

function setup() {//runs once
  createCanvas(720, 720);
  fill('pink');
  strokeWeight (8);
}

function draw() {
  background(220);
  for (var y = 0; y < 600; y = y + 300){
    for (var x = 0; x < 600; x = x + 300 ){
    image(img, x, y);
    }



//      quad(x,y,
//      x+ 300,y,
//      x+ 300,y+300,
//      x,y+300);
//  }

}

}
