/*
Name:  Fernando O
Title:  Sound and Dance 

Concept:  Sounds of music to make our character dance
*/

let move = 0;

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("orange");

  // Call my original functions
  drawStickman();
  drawSpeaker();
}


// STICKMAN FUNCTION

function drawStickman() {

  stroke("black");
  strokeWeight(5);
  noFill();

  // Head
  circle(200, 200, 80);

  // Body
  line(200, 240, 200, 375);

  // Left arm
  line(200, 300, 100, 330 + move);

  // Right arm
  line(300, 320 - move, 200, 300);

  // Left leg
  line(200, 375, 160 - move, 500);

  // Right leg
  line(200, 375, 260 + move, 500);
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
 