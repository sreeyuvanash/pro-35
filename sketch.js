var database;
var height;
var bg;
var balloonImg;
var balloon;
function preload(){

  bg = loadImage("pro-C35 images/Hot Air Ballon-01.png")
  balloonImg = loadAnimation("pro-C35 images/Hot Air Ballon-02.png","pro-C35 images/Hot Air Ballon-03.png"
  ,"pro-C35 images/Hot Air Ballon-04.png")
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-150);
//createSprite(400, 200, 50, 50);
balloon = createSprite(500,500,50,50);
balloon.scale=0.7
balloon.addAnimation("balloonImg",balloonImg)
    console.log(balloon.y);
  
  database =  firebase.database();
  game = new Game();
  //game.getState();
  //game.start();
}

function draw() {
  background(bg);  

 game.move();
 game.updateHeight()

  drawSprites();
}