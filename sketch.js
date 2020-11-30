var platform , dustbin ,ball ;





function setup() {
  createCanvas(800,400);
  platform =createSprite(800,400,1700,20);
  dustbin= createSprite(750,390,70,170)
  ball =createSprite(100,390,45,50)
}

function draw() {
  background(255,255,255); 
  background("red") 
  drawSprites();
}