var boy
var dog
var path
var obstacle1
var obstacle2
var obstacle3
var obstacle4


function preload(){
 boy_running.loadAnimation("boy_running.png")
 dog_running.loadAnimation("dog_running.png")
 path.loadImage("path.png")
 obstacle1.loadImage("obstacle1.png")
 obstacle2.loadImage("obstacle2.png")
 obstacle3.loadImage("obstacle3.png")
 obstacle4.loadImage("obstacle4.png")
}

function setup() {
 createCanvas = (600,600)
 boy_running.addAnimation();
 boy.velocityX = 3*i
 dog_running.addAnimation();
 dog.velocityX = 2.6*i
 path.addImage();
 path.velocityX = -2.3*i
 obstacle1.addImage();
 obstacle2.addImage();
 obstacle3.addImage();
 obstacle4.addImage();
 gameState === PLAY
 gameState === END
}

function draw() {
 background(280);

}
  drawsprites();