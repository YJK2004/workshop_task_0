let x = 0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  
  if (x > width / 2) {
    fill(255, 0, 0);
  } else {
    stroke(0);
  fill(152, 255, 152);
  } 
  circle(x, x, 50);
  
  x = x + 4
  
  if (x > width) {
    x = 0
  }
}