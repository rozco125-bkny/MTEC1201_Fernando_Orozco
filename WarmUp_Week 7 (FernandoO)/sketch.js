/*
Name:  Fernando O
Title:  WarmUp_Week 7

*/

let canvasSize = 600;
let currentScene = 0;
let numScenes = 2;

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(255);

  if (currentScene === 0) {
    drawScene0();
  }
  else if (currentScene === 1) {
    drawScene1();
  }

  // Black border around canvas
  noFill();
  stroke("brown");
  strokeWeight(5);
  rect(2.5, 2.5, canvasSize - 5, canvasSize - 5);
}

function mousePressed() {
  currentScene++;

  if (currentScene >= numScenes) {
    currentScene = 0;
  }
}

// SCENE 0
function drawScene0() {
  fill("blue");
  circle(300, 300, 200);
}

// SCENE 1
function drawScene1() {
  fill("green");
  square(200, 200, 200);
}

