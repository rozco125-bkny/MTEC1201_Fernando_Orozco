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

// Button variables
let selectedButton = "";
let pressedButton = "";

// Music note variables
let musicNotes = [];
let playing = false;

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

  // Floating music notes
  drawMusicNotes();

  // Playback control buttons
  drawButton(250, "<<RW", "rewind");
  drawButton(300, "PLAY>", "play");
  drawButton(350, "FW>>", "forward");
  drawButton(400, "||", "pause");

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

// NEW FUNCTION: DRAW BUTTONS
function drawButton(x, label, name) {

  push();

  // Button pressed down
  if (pressedButton === name) {
    fill("gray");
  }

  // Button selected
  else if (selectedButton === name) {
    fill("darkgray");
  }

  // Normal button
  else {
    fill("silver");
  }

  stroke("black");
  strokeWeight(2);
  square(x, 450, 40);

  // Button text
  fill("black");
  noStroke();
  textSize(11);
  textAlign(CENTER, CENTER);

  // Move text slightly when pressed
  if (pressedButton === name) {
    text(label, x + 21, 471);
  } else {
    text(label, x + 20, 470);
  }

  pop();
}


// FLOATING MUSIC NOTES
function drawMusicNotes() {

  push();
  textAlign(CENTER, CENTER);

  // Create notes only when PLAY is selected
  if (playing && frameCount % 12 === 0) {
    musicNotes.push({
      x: random(180, 520),
      y: 150,
      speed: random(1, 3)
    });
  }

  // Move each note upward
  for (let i = musicNotes.length - 1; i >= 0; i--) {

    fill("red");
    noStroke();
    textSize(25);
    text("♪", musicNotes[i].x, musicNotes[i].y);

    musicNotes[i].y -= musicNotes[i].speed;

    // Remove notes when they leave the canvas
    if (musicNotes[i].y < -30) {
      musicNotes.splice(i, 1);
    }
  }

  pop();
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
    playing = false;
    selectedButton = "rewind";
    pressedButton = "rewind";
    musicNotes = [];
  }


  // PLAY - Normal clockwise
  else if (mouseX >= 300 && mouseX <= 340 &&
           mouseY >= 450 && mouseY <= 490) {

    reelSpeed = 0.03;
    playing = true;
    selectedButton = "play";
    pressedButton = "play";
  }

  // FAST FORWARD - Fast clockwise
  else if (mouseX >= 350 && mouseX <= 390 &&
           mouseY >= 450 && mouseY <= 490) {

    reelSpeed = 0.15;
    playing = false;
    selectedButton = "forward";
    pressedButton = "forward";
    musicNotes = [];
  }

  // PAUSE - Stop reels
  // PAUSE - Stop reels
  else if (mouseX >= 400 && mouseX <= 440 &&
           mouseY >= 450 && mouseY <= 490) {

    reelSpeed = 0;
    playing = false;
    selectedButton = "pause";
    pressedButton = "pause";
    musicNotes = [];
  }
}

// MOUSE RELEASED
function mouseReleased() {
  pressedButton = "";
}




