var seaImage,sea;
var shipImage,ship;
var shipImage2;
function preload(){
seaImage=loadImage("sea.png")
  shipImage=loadAnimation("ship-1.png","ship-2.png")
  shipImage2=loadAnimation("ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400)
  sea.addImage(seaImage)
  sea.scale=0.25
  sea.velocityX=-3

  ship=createSprite(150,220, 50,30)
  ship.addAnimation("float",shipImage)
  ship.scale=0.25
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x= 200
  }
  if(keyDown("space")){
    ship.addAnimation("float",shipImage2);
  }
  drawSprites()
 
}