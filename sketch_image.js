let boat1, boat2, explosion;

function preload() {
  boat1 = loadImage("image/boat.png"); //load boat image
  boat2 = loadImage("image/boat.png"); //load boat image
  explosion = loadImage("image/explosion.png"); //load explosion image
}

function setup() {
  var mycanvas = createCanvas(250, 600); //set up the canvas
  mycanvas.parent("p5canvas"); //insert the canvas to HTML tag with id = "p5canvas"
  background(255, 255, 255); //set up background color
  x = 120; //set up coordinate x
  y = 500; //set up coordinate y
  frameRate(120); //set up frameRate
}

function draw() {
  background(255, 255, 255); //set up background color for every loop
  image(boat1, 0, 1, 250, 250); //draw the boat
  image(boat1, 0, 400, 250, 250); //draw the boat
  drawMissile(x, y); //draw the missle
  let s = "This is a missile";
  fill(50);
  text(s, 75, y, 100, 50); //show text description of missile
  let str = "This is a missile destroyer.";
  fill(50);
  text(str, 50, 570, 150, 50); //show text description of bottom boat
  let str2 = "This is the target destroyer.";
  fill(50);
  text(str2, 50, 80, 150, 50); //show text description of top boat
  y = y - 8; //move the missle
  if (y < 170) {
    y = 500; //reset the missle
    boom(); //display explosion effect
    noLoop(); //stop looping
    //freeze the draw() to show the explosion longer then continue looping
    setTimeout(function () {
      loop(); //start looping
    }, 1000);
  }
}

//display the explosion effect
function boom() {
  image(explosion, 0, 1, 250, 250); //display explosion image
  let s = "Boom!"; //show boom text
  fill(50);
  text(s, 120, 125, 150, 50); //display boom text
}

function drawMissile(x, y) {
  fill(255, 255, 255); //set wings to white
  arc(x, y, 40, 30, PI, 0, CHORD); //draw wings
  fill(255, 0, 0); //set the missle's body to red
  rect(x - 10, y - 51, 20, 50); //draw the body of missle
  triangle(x - 10, y - 51, x, y - 60, x + 10, y - 51); //draw the top of missle
  fill(255, 255, 0); //set fire to yellow
  rect(x - 2.5, y + 10, 5, 25); //draw first fire lines
  rect(x - 2.5 - 10, y + 15, 5, 25); //draw second fire lines
  rect(x - 2.5 + 10, y + 15, 5, 25); //draw third fire lines
}
