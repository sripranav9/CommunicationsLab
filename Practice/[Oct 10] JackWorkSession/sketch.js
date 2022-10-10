let x;
let direction;

function setup() {
  createCanvas(400, 300);
  x = 50;
  direction = 2;
}

function draw() {
  background(57, 122, 227, 100);
  // strokeWeight(10);
  
  /* animating a circle */
  noStroke();
  fill("navy");
  x = x + direction;
  circle(x, height/2, 100);
  // if (x > width) {
  //   direction = -2;
  // } else if (x < 0) {
  //   direction = 2;
  // }
  if (x > width - 50 || x < 50) {
    direction = -direction;
  }
  
  /* simple shapes */
  // stroke("rgb(255,239,239)");
  // fill("navy");
  // circle(200,200,150);
  // fill("red");
  // ellipse(100,100,200,100);
  // fill("yellow");
  // triangle(100,100,200,150,200,200);
  // noFill();
  // rect(x,height/2,100,50,10);
}
