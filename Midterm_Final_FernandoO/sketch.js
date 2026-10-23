/*
Name:  Fernando O
Title:  Reel to Reel

Concept:  For my Midterm WIP I will be building a playable reel-to-reel
*/


let leftReel;
let rightReel;

// Reel rotation variables
let reelAngle = 0;
let reelSpeed = 0;

function preload() {
  leftReel = loadImage("images/left reel.png");
  rightReel = loadImage("images/right reel.png");
}

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("beige");

// Update reel rotation
  reelAngle = reelAngle + reelSpeed;

  //Reel boxframe
  fill("lightgray")
  strokeWeight(12);
  stroke("black");
  rect(160, 150, 375, 375);

  //Reel center tape reader
  fill("black")
  strokeWeight(12);
  stroke("black");
  rect(300, 325, 100, 60);

  //Reel single tape left
  stroke("black");
  strokeWeight(3);
  noFill();
  line(200, 300, 300, 370);

  //Reel tape stabler (left)
  fill("black");
  strokeWeight(3);
  stroke("grey");
  ellipse(260, 364, 30, 30);
  
  //Reel single tape right
  stroke("black");
  strokeWeight(3);
  noFill();
  line(500, 300, 400, 370);

  //Reel tape stabler (right)
  fill("black");
  strokeWeight(3);
  stroke("grey");
  ellipse(440, 364, 30, 30);

  // LEFT REEL ROTATION
  push();
  translate(210, 210);
  rotate(reelAngle);
  imageMode(CENTER);
  image(leftReel, 0, 0, 220, 220);
  pop();

  // RIGHT REEL ROTATION
  push();
  translate(490, 210);
  rotate(reelAngle);
  imageMode(CENTER);
  image(rightReel, 0, 0, 220, 220);
  pop();

  // Left reel center
  fill("black");
  noStroke();
  circle(210, 210, 65);

  // Right reel center
  fill("black");
  noStroke();
  circle(490, 210, 65);

  //Rewind button
  fill("silver");
  strokeWeight(2);
  stroke("black");
  square(250, 450, 40);

    // Rewind button text
    fill("black");
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text("<<RW", 270, 470);

  //Play button
  fill("silver");
  strokeWeight(2);
  stroke("black");
  square(300, 450, 40);

    // Play button text
    fill("black");
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text("PLAY>", 320, 470);

  //Foward button
  fill("silver");
  strokeWeight(2);
  stroke("black");
  square(350, 450, 40);

    // Foward button text
    fill("black");
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text("FW>>", 370, 470);

  //Pause button
  fill("silver");
  strokeWeight(2);
  stroke("black");
  square(400, 450, 40);

    // Pause button text
    fill("black");
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text("||", 420, 470);

// Welcome message
if (millis() <5000) {
  push();
  fill("red");
  noStroke();
  textFont("Arial");
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("ENJOY THE MUSIC!", 350, 75);
  pop();
}
}

// MOUSE BUTTON CONTROLS
function mousePressed() {

  // Disable buttons during welcome message
  if (millis() < 5000) {
    return;
  }

  // REWIND - Fast counterclockwise
  if (mouseX >= 250 && mouseX <= 290 &&
      mouseY >= 450 && mouseY <= 490) {
    reelSpeed = -0.15;
  }

  // PLAY - Normal clockwise
  else if (mouseX >= 300 && mouseX <= 340 &&
           mouseY >= 450 && mouseY <= 490) {
    reelSpeed = 0.03;
  }

  // FAST FORWARD - Fast clockwise
  else if (mouseX >= 350 && mouseX <= 390 &&
           mouseY >= 450 && mouseY <= 490) {
    reelSpeed = 0.15;
  }

  // PAUSE - Stop reels
  else if (mouseX >= 400 && mouseX <= 440 &&
           mouseY >= 450 && mouseY <= 490) {
    reelSpeed = 0;
  }
}



