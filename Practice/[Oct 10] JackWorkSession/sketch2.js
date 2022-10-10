function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  for (let i = 0; i < height+50; i = i + 1) {
    fill(178+177*sin(i/10),
         178+177*sin(i/15),
         178+177*sin(i/20));
    ellipse(width/2+50*sin(i/10+frameCount/50),i,100,100);
  }
}
