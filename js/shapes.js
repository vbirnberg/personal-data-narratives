function setup() {
  createCanvas(windowWidth, windowHeight);
  background (52, 194, 237);

}

function draw() {
  if(mouseIsPressed == true){
    background(200, 100, 50);
  }else{
    background(52, 194, 237);
  }

  fill (173, 124, 87)
  circle (300, 300, 100);

  fill (105, 36, 40)
  rect (230, 230, 50, 50)

  fill (105, 36, 40)
  rect (330, 230, 50, 50)

  if(keyIsPressed == true){
    strokeWeight(10);
    //random requires at least one argument. Will return a reandom
    //value between the ranges
    rect(305,330, 10,5)

  }else{
    strokeWeight(4);
    stroke(20, 100, 66);
    circle (305,330, 30)
  }


  circle (275, 300, 20)
  circle (320, 300, 20)

 ellipse (250, 445, 300, 200)

}

