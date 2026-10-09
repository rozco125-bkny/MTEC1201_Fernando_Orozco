/*
Name:  Fernando O
Title:  Living Room

Concept:  This 5th sketch is an image of a record-player playing music 
in a living room with speakers
*/

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("skyblue");

  if (powerOn) {
    move = random(-5, 5);
  } else {
    move = 0;
  }

  drawSpeaker();
}

let move = 0;
let powerOn = false;

// SPEAKERS

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

//Record-Player Frame
  fill("silver");
  strokeWeight(4);
    stroke("black");
  rect(175, 200, 350, 350);

 //record plater
fill("red");
  strokeWeight(6);
  stroke("black");
  circle(335,385,250);

//center of record platter
fill("silver");
  strokeWeight(2);
  circle(335,385,15);

//On & Off Button
  fill("silver");
  strokeWeight(2);
    stroke("black");
square(185, 515, 25);

 //tone arm base
fill("silver");
  strokeWeight(4);  
  stroke("black");
  circle(470,250,75);

// Silver arm
  strokeWeight(8);  
  stroke("grey");
line(470, 250, 440, 425);

// Needle
strokeWeight(14);  
  stroke("black");
line(435, 440, 438, 430);

//On & Off Redlight
// On & Off Indicator Light
stroke("black");
strokeWeight(2);

if (powerOn) {
  fill("lime");
} else {
  fill("red");
}

circle(202, 523, 10);


//Cue area frame
fill("silver");
  strokeWeight(4);
    stroke("black");
  rect(475,410,30,130);
}

// MOUSE INPUT
function mousePressed() {

  if (mouseX > 185 && mouseX < 210 &&
      mouseY > 515 && mouseY < 540) {

    powerOn = !powerOn;

  }
}

