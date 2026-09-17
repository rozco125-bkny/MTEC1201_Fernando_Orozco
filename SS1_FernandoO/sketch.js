/*
Name:  Fernando O
Title:  Music in Shapes

Concept:  This first sketch uses simple shapes that will help
how to represent music using shapes, colors, and patterns.
*/

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("blue");

fill("red");
  strokeWeight(4);
    stroke("black");
  rect(100,50,100,275)

fill("black");
  strokeWeight(6);
  stroke("gray");
  circle(500,150,200)

fill("green");
  strokeWeight(10);
  stroke("black");
  triangle(350, 300, 150, 500, 550, 500)
}
