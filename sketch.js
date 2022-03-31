function setup() {
  //set up the canvas
  var mycanvas = createCanvas(250, 400);

  //insert the canvas to the HTML tag
  mycanvas.parent("p5canvas");
  background(255, 255, 255); //set up background color
  x = width / 2; //set up coordinate x
  y = height - 50; //set up coordinate y
}

function draw() {
  background(255, 255, 255); //set up background color for every loop
  drawItem(x, y); //draw the rocket
  let s = "This is a rocket flying to the sky.";
  fill(50);
  text(s, 10, y, 70, 80);
  y = y - 1; //move the rocket
  if (y < 0) {
    //reset the rocket
    y = height;
  }
}

function drawItem(x, y) {
  fill(255, 255, 255); //set wings to white
  arc(x, y + 40, 50, 40, PI, 0, CHORD); // ellipse(x, y, 30, 80); //draw wings

  fill(255, 0, 0); //set the rocket's body to red
  rect(x - 10, y - 40, 20, 80); //draw the body of rocket
  triangle(x - 10, y - 40, x, y - 50, x + 10, y - 40); //draw the top of rocket

  fill(255, 255, 255); //set windows to white
  square(x - 5, y, 10, 1, 1, 1, 1); //draw 3 windows
  square(x - 5, y - 20, 10, 1, 1, 1, 1);
  square(x - 5, y + 20, 10, 1, 1, 1, 1);

  fill(255, 255, 0); //set fire to yellow
  rect(x - 2.5, y + 50, 5, 25); //draw 3 fire lines
  rect(x - 2.5 - 10, y + 50, 5, 25);
  rect(x - 2.5 + 10, y + 50, 5, 25);
}
