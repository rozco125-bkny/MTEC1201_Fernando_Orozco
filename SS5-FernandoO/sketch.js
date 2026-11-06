
/*
Name: Fernando Orozco
Title: The Sound of Vinyl

Instructions:
Click the power button on the turntable
to turn the music experience ON or OFF.

When ON:
- The record spins clockwise.
- The speakers vibrate.
- Music notes float upward.

Click the power button again to stop.
*/

let notes = [];
let move = 0;
let powerOn = false;
let recordAngle = 0;

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("skyblue");

  // Rotate record when power is ON
  if (powerOn) {
    recordAngle += 0.03;
  }

  // Speaker vibration when power is ON 
  if (powerOn) {
    move = random(-5, 5);
  } else {
    move = 0;
  }

  // Draw the speakers
  drawSpeaker();

  // Floating music notes
  drawMusicNotes();
}


// Speakers and turntable
function drawSpeaker() {

  // Left Speaker cabinet
  fill("black");
  strokeWeight(4);
  stroke("yellow");
  rect(50, 350, 100, 200);

  // Left Speaker tweeter (top)
  fill("yellow");
  strokeWeight(3);
  stroke("grey");
  ellipse(100, 400, 50, 50);

  // Left Speaker woofer
  fill("yellow");
  strokeWeight(3);
  stroke("grey");
  ellipse(100, 490, 80 + move, 80 + move);

  // Yellow ellipse (woofer center outline)
  fill("yellow");
  ellipse(100, 490, 60 + move, 60 + move);

  // Gray ellipse center
  fill(100);
  ellipse(100, 490, 30 + move, 30 + move);


  // Right Speaker cabinet
  fill("black");
  strokeWeight(4);
  stroke("yellow");
  rect(550, 350, 100, 200);

  // Right Speaker tweeter (top)
  fill("yellow");
  strokeWeight(3);
  stroke("grey");
  ellipse(600, 400, 50, 50);

  // Right Speaker woofer
  fill("yellow");
  strokeWeight(3);
  stroke("grey");
  ellipse(600, 490, 80 + move, 80 + move);

  // Yellow ellipse (woofer center outline)
  fill("yellow");
  ellipse(600, 490, 60 + move, 60 + move);

  // Gray ellipse center
  fill(100);
  ellipse(600, 490, 30 + move, 30 + move);


  // Record-Player Frame
  fill("silver");
  strokeWeight(4);
  stroke("black");
  rect(175, 200, 350, 350);

  // Rotating vinyl record
  push();
  translate(335, 385);
  rotate(recordAngle);

  // Red vinyl record
  fill("red");
  strokeWeight(6);
  stroke("black");
  circle(0, 0, 250);

  // Vinyl groove (While loop)
  let groove = 70;

  while (groove < 230) {
    noFill();
    stroke("black");
    strokeWeight(2);
    circle(0, 0, groove);

    groove += 25;
  }

  // Center record label
  fill("silver");
  stroke("black");
  strokeWeight(2);
  circle(0, 0, 45);

  // Small black rotation marker
  fill("black");
  noStroke();
  circle(10, -8, 5);

  pop();

  // On & Off Button
  fill("silver");
  strokeWeight(2);
  stroke("black");
  square(185, 515, 25);

  // Tone arm base
  fill("silver");
  strokeWeight(4);
  stroke("black");
  circle(470, 250, 75);

  // Silver arm
  strokeWeight(8);
  stroke("grey");
  line(470, 250, 440, 425);

  // Needle
  strokeWeight(14);
  stroke("black");
  line(435, 440, 438, 430);

  // On & Off Indicator Light
  stroke("black");
  strokeWeight(2);

  if (powerOn) {
    fill("lime");
  } else {
    fill("red");
  }

  circle(202, 523, 10);

  // Cue area frame
  fill("silver");
  strokeWeight(4);
  stroke("black");
  rect(475, 410, 30, 130);
}


// Mouse input
function mousePressed() {

  // Check if the power button is clicked
  if (mouseX > 185 && mouseX < 210 &&
      mouseY > 515 && mouseY < 540) {

    powerOn = !powerOn;

    // Clear music notes when power is OFF
    if (!powerOn) {
      notes = [];
    }
  }
}

function drawMusicNotes() {

  // Create notes when power is ON
  if (powerOn && frameCount % 15 === 0) {

    notes.push({
      x: random(70, 130),
      y: 350
    });

    notes.push({
      x: random(570, 630),
      y: 350
    });
  }

  // Move notes upward (For Loop)
  for (let i = notes.length - 1; i >= 0; i--) {

    fill("red");
    noStroke();
    textSize(25);
    text("♪", notes[i].x, notes[i].y);

    notes[i].y -= 2;

    // Remove notes when they leave the canvas
    if (notes[i].y < -20) {
      notes.splice(i, 1);
    }
  }
}
