// rings of time dance here
// in this moment we call life
// repeating sunrise

//click to add more rings

let n = 3;
let img1, img2;
let w;

function preload() {
  img1 = loadImage("https://assets.codepen.io/4559259/repeat.jpg");
  img2 = loadImage("https://assets.codepen.io/4559259/star.png");
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(200);
  noStroke();
  background(img1);
  imageMode(CENTER);
  w = 3;
}

function draw() {
  translate(width / 2, height / 2);

  t1 = 360 * sin(frameCount / 50);
  push();
  rotate(-t1 / 7);
  image(img1, 0, 0, 800, 800);
  pop();
  for (let i = 0; i < n; i++) {
    bowditch(t1 + (380 / n) * i);
  }
  push();
  rotate(t1);
  image(img2, 0, 0, 400, 400);
  pop();
}

function bowditch(t) {
  for (let j = 0; j < n; j += 2) {
    for (let i = 0; i < 300; i++) {
      fill(255 * sin(i), 255 * sin(i), 50 + 205 * sin(i));
      x = 100 * sin(t * w + i);
      y = 100 * sin(t + i);
      // background(200)
      s = 30; //10+30*sin((t+i/t))

      circle(x, y, 2);
    }
  }
}

function mousePressed() {
  if (n < 15) {
    n++;
  } else {
    n = 1;
  }
}

function keyPressed() {
  w = random(1, 10);
}
