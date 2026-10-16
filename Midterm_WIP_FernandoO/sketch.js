/*
Name:  Fernando O
Title:  Reel to Reel

Concept:  For my Midterm WIP I will be building a playable reel-to-reel
*/


let leftReel;
let rightReel;

function preload() {
  leftReel = loadImage("images/left reel.png");
  rightReel = loadImage("images/right reel.png");
}

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("beige");

  //Reel boxframe
  fill("lightgray")
  strokeWeight(12);
  stroke("black");
  rect(160, 150, 375, 375);

  //Reel centertape reader
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


  // Left reel
  image(leftReel, 100, 100, 220, 220);

  // Right reel
  image(rightReel, 380, 100, 220, 220);

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

}

