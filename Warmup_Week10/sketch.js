/*
Name: Fernando Orozco
Title: 11/6 Check-in
*/

function setup() {
  createCanvas(500, 500);
  background("Green");

  stroke("red");
  strokeWeight(8);

  // Loop to create diagonal points
  for (let x = 20; x < 500; x += 20) {
    point(x, x);
  }
}
