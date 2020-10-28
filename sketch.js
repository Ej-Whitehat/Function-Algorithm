function setup() {
  createCanvas(800,400);
fixed = createSprite(400, 200, 50, 50);
fixed.shapeColor = "black";
moving = createSprite(300, 300, 50, 50);
moving.shapeColor = "black";
other1 = createSprite(100, 100, 50, 50);
other1.shapeColor = "black";
other2 = createSprite(300, 200, 50, 50);
other2.shapeColor = "black";
other3 = createSprite(170, 230, 50, 50);
other3.shapeColor = "black";
other3.velocityX = 5;
other4 = createSprite(670, 230, 50, 50);
other4.shapeColor = "blue";
other4.velocityX = -5
}

function draw() {
  background(255,0,0);  
  other2.x = World.mouseX;
  other2.y = World.mouseY;
  if(isTouching(other1, other2)){
  other2.shapeColor = "green";
  other1.shapeColor = "green";
  }
  else{
    other2.shapeColor = "black";
    other1.shapeColor = "black";
  }
  bounceOff(other3, other4);
  drawSprites();
}
