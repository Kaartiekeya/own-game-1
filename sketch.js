var posX;
var posY;

function preload(){
mapImage=loadImage("map.png");
}

function setup(){
  createCanvas(1600,750)
  b1=createSprite(690,220,10,37)
}

function draw(){
  background (mapImage);
  posX=mouseX;
  posY=mouseY;
  fill("white");
  text(posX+","+posY,10,10)
  drawSprites();
}