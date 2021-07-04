var ball
function setup() {

  createCanvas(400,400);
  ball=createSprite(200,200,10,10)
  
}



function draw() {

  drawSprites();

  background("white");

  if(keyIsdown("UP_ARROW")){
    background("red");
  }

  if(keyIsdown("DOWN_ARROW")){
    background("blue");
  }

  if(keyIsdown("LEFT_ARROW")){
    background("green");
  }

  if(keyIsdown("RIGHT_ARROW")){
    background("yellow");
  }

}




