var r1 = 30
var r2 = 20

var a1 = 0
var a2 = 0

//var a1Inc
//var a2Inc

var prevX
var prevY

function setup() {
  createCanvas(792, 612, SVG)
  angleMode (DEGREES)
//  background (30)

  a1Inc = random (0.1,5)
  a2Inc = random (0.1,5)

}

function draw() {

  translate(682,502)
  stroke(255)


for (var i = 0; i<20; i++) {
  var x1 = r1 * cos(a1)
  var y1 = r1 * sin(a1)

  var x2 = x1 + r2 * cos(a2)
  var y2 = y1 + r2 * sin(a2)

//  var r = map(sin(frameCount), -1, 1, 100, 200)
//  var g = map(cos(frameCount), -1, 1, 100, 200)
//  var b = map(sin(frameCount), -1, 1, 200, 100)

  stroke(0,0,0)

  line(prevX,prevY, x2, y2)

  prevX = x2
  prevY = y2

  a1 += 80
  a2 += 80


 // a1 += a1Inc
 // a2 += a2Inc

}
save("SpirographBottomRight.svg"); // give file name
print("saved svg");
noLoop(); // we just want to export once

}
