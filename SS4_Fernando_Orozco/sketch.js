let move = 0;

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("orange");

  // Call my original functions
  drawSpeaker();
}

// SPEAKER FUNCTION

function drawSpeaker() {

  // Speaker cabinet
  fill("brown");
  strokeWeight(4);
  stroke("black");
  rect(500, 200, 100, 300);

  // Speaker tweeter (top)
  fill("white");
  strokeWeight(3);
  stroke("grey");
  ellipse(550, 250, 50, 50);

  // Speaker middle woofer
  fill("white");
  strokeWeight(3);
  stroke("grey");
  ellipse(550, 330, 80 + move, 80 + move);

  // Speaker middle woofer:
  // White ellipse (woofer center outline)
  fill(255);
  ellipse(550, 330, 60 + move, 60 + move);

  // Speaker middle woofer:
  // Gray ellipse center
  fill(100);
  ellipse(550, 330, 30 + move, 30 + move);

  // Speaker bottom woofer
  fill("white");
  strokeWeight(3);
  stroke("grey");
  ellipse(550, 430, 80 + move, 80 + move);

  // Speaker bottom woofer:
  // White ellipse (woofer center outline)
  fill(255);
  ellipse(550, 430, 60 + move, 60 + move);

  // Gray ellipse center
  fill(100);
  ellipse(550, 430, 30 + move, 30 + move);
}

// KEYBOARD INPUT

function keyPressed() {

  // Random movement when any key is pressed
  move = random(-10, 10);
}

function keyReleased() {

  // Return everything to normal
  move = 0;
}