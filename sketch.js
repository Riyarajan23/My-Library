var fr,mr


function setup() {
  createCanvas(800,400);
  r1=createSprite(400, 200, 60, 20);
  r1.shapeColor="red";
  r2=createSprite(200, 200, 20, 60);
  r2.shapeColor="red";

}

function draw() {
  r2.x=World.mouseX
  r2.y=World.mouseY
  if (IsTouching(r2,r1)){

  
    
    r2.shapeColor="yellow";
    r1.shapeColor="yellow";
  }
  else {
    r1.shapeColor="red";
    r2.shapeColor="red";
  }
  background(0);  
  drawSprites();
}



