
let x = []
let y = []

let galaxy
let boom

function preload(){
  galaxy = loadImage("images/galaxy.png")
  boom = loadSound("audio/boom.mp3")

}

function setup(){
  frameRate(10);

createCanvas(windowWidth, windowHeight)
imageMode(CENTER)

}

function draw(){
  let step = frameCount % 20;
  let angle = map(step, 0, 20, -PI / 4, PI / 4);
  background(0);
  translate(50, 50);
  let shear_factor = 1 / tan(PI / 2 - angle);
  applyMatrix(1, 0, shear_factor, 1, 0, 0);


  textSize(15)
  text('click to build your galaxy. press "x" to destroy the galaxy', 20, 50)
  fill(255, 204, 0)
  for(let i=0; i < x.length; i++){
  image(galaxy, x[i], y[i], 60, 60)


}
}

function mouseDragged(){
  fill(random(255), random(255), random(255))
  stroke(10,10,10)
  //for(let i =0; i<1; i++){
  bezier(random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight));

}

function mouseClicked(){

  x.push(mouseX)
  y.push(mouseY)
  boom.play ()

}

function keyPressed(){
  if(key === 'x'){
    for(let i=0; i < x.length; i++){
    x.splice(i, x.length)
    y.splice(i, y.length)
    print(x.length)

}
}
}
