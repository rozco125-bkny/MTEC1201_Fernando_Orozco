/*
Name:  Fernando O
Title:  Week 6 Coding Warm Up

A responsive drawing using only rectangles, that uses at least one conditional statement
*/

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("orange");

  Ghost();
}

// Ghost
function Ghost() {

  // Check if mouse is over the ghost
  if (mouseX > 200 && mouseX < 300 &&
      mouseY > 200 && mouseY < 350) {
    fill("red");
  } else {
    fill("white");
  }

  strokeWeight(4);
  stroke("black");
  rect(200, 200, 100, 150);
}