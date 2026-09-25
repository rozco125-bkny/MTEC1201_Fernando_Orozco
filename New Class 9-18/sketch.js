const canvassize = 600;
  let rectwidth;
  let rectheight;
  let rectY;
  let rectX;

  let frames = 0;

function setup() {

  createCanvas(canvassize, canvassize * 1.5);
  rectwidth = canvassize;
  rectheight = 50;
  rectY = 0;

}

function draw() {
  background(240, 240, 255);

  rectWidth = frames % 200;
  rectX = canvassize/2 - rectWidth/2;
  rect(rectX, rectY, rectwidth, rectheight);


}
