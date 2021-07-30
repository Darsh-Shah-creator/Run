var runner, path, pathimage, runnerani, invi1, invi2;

function preload(){
  runnerani = loadAnimation('Runner-1.png', 'Runner-2.png');
  pathimage = loadImage('path.png');
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200, 200, 400, 1000);
  path.addImage(pathimage);
  runner = createSprite(200, 300, 20, 20);
  runner.addAnimation('run',runnerani);
  invi1 = createSprite(350, 300, 10, 1000);
  invi2 = createSprite(50, 100, 10, 1000);   
}

function draw() {
  background('white');
  runner.scale = 0.09;
  runner.x = World.mouseX
  path.velocityY = 5;
  if (path.y > 400 ){
    path.y = height / 2;
  } 
  invi1.visible = false;
  invi2.visible = false;
  runner.collide(invi1);
  runner.collide(invi2);
  drawSprites();
  }