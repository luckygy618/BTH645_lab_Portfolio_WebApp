let boat1, boat2, explosion, sound;
var button,
  flag = 0;

function preload() {
  boat1 = loadImage("image/boat.png"); //load boat image
  boat2 = loadImage("image/boat.png"); //load boat image
  explosion = loadImage("image/explosion.png"); //load explosion image
  sound = loadSound("sound/sound.mp3"); //load explosion sound effect
}

function setup() {
  var mycanvas = createCanvas(250, 600); //set up the canvas
  mycanvas.parent("p5canvas"); //insert the canvas to HTML tag with id = "p5canvas"
  background(255, 255, 255); //set up background color
  x = 120; //set up coordinate x
  y = 500; //set up coordinate y
  frameRate(120); //set up frameRate
  button = createButton("Click Me to Fire Missile");
  button.position(140, 400); //set the button position
  button.mousePressed(fire); //add event listener to the button
  noLoop(); //stop the draw() function
  textFont("Georgia", 15); //set font type and size
  textStyle(BOLD); //set font to bold
}

function draw() {
  background(255, 255, 255); //set up background color for every loop
  drawBoat(); //draw the boats
  if (flag != 0) {
    drawMissile(x, y); //draw the missle
  }
  flag++;
  y = y - 5.5; //move the missle
  if (y < 150) {
    flag = 1;
    y = 500; //reset the missle
    boom(); //display explosion effect
    //freeze the draw() to show the explosion longer then continue looping
    setTimeout(function () {
      background(255, 255, 255);
      drawBoat();
      button.show();
    }, 5000);
    noLoop();
  }
}

//display the explosion effect
function boom() {
  image(explosion, 0, 1, 250, 250); //display explosion image
  let s = "Boom!"; //show boom text
  fill(50);
  text(s, 110, 125, 150, 50); //display boom text
}

function fire() {
  loop(); //start looping
  button.hide(); //hide the button to prevent the user to click it
  sound.play(); //start sound
}

function drawBoat() {
  image(boat1, 0, 1, 250, 250); //draw the boat
  image(boat1, 0, 400, 250, 250); //draw the boat
  let str = "This is a missile destroyer.";
  fill(50);
  text(str, 20, 570, 500, 100); //show text description of bottom boat
  let str2 = "This is the target destroyer.";
  fill(50);
  text(str2, 20, 80, 500, 100); //show text description of top boat
}

function drawMissile(x, y) {
  let str2 = "Wait for the explosion ends";
  fill(50);
  text(str2, 20, 350, 500, 100); //show text description of missile

  let s = "This is a missile";
  fill(50);
  text(s, 55, y, 500, 50); //show text description of missile
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
