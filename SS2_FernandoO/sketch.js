/*
Name:  Fernando O
Title:  Music in Shapes

Concept:  This first sketch uses simple shapes that will help
how to represent music using shapes, colors, and patterns.
*/

let cueY = 315;
let cueDirection = 1;
let cueSpeed =2;

let lightOn = false;

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("grey");

  //tone arm base
fill("silver");
  strokeWeight(6);  
  stroke("black");
  circle(625,75,100)

// Tone arm resting position

// Black outer arm
stroke("black");
strokeWeight(14);
line(625, 75, 640, 365);

// Silver inside arm
stroke("silver");
strokeWeight(8);
line(625, 75, 640, 365);

// Headshell
fill("silver");
stroke("black");
strokeWeight(4);
rect(630, 360, 22, 10);

// Needle
fill("black");
triangle(635, 370, 647, 370, 641, 388);

  //record plater
fill("black");
  strokeWeight(6);
  stroke("silver");
  circle(375,275,475)

  //center of record platter
fill("white");
  circle(375,275,25)
 
  //Cue area frame
fill("silver");
  strokeWeight(4);
    stroke("black");
  rect(25,300,75,275);

  //Cue area moving up and down
cueY = cueY + (cueSpeed * cueDirection);

if (cueY >= 540) {
  cueDirection = -1;
}

if (cueY <= 315) {
  cueDirection = 1;
}

strokeWeight(4);
    stroke("black");
rect(40,cueY,45,20);

  //On & Off Button
  fill("silver");
  strokeWeight(4);
    stroke("black");
  rect (575,475,100) 

 //On & Off Redlight
stroke("black");
  strokeWeight(4);

  if (lightOn == true) {
    fill("red");
  } else {
    fill("white");
  }

  circle(590, 490, 15);
}

function keyReleased() {
  lightOn = !lightOn;

  // Move cue rectangle
  cueY = cueY + (25 * cueDirection);

  // If it reaches the bottom, reverse direction
  if (cueY >= 540) {
    cueY = 540;
    cueDirection = -1;
  }

  // If it reaches the top, reverse direction
  if (cueY <= 315) {
    cueY = 315;
    cueDirection = 1;
  }

}