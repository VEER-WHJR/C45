var veer, veerImg, veerImg2;
var gorgon, gorgonImg;
var minotaur, minotaurImg;
var cyclops, cyclopsImg;
var soldier, soldierImg, soldierGroup;

function preload(){
veerImg = loadImage("images/veer.png");
veerImg2 = loadImage("images/kratosAttacking.jpg");
soldierImg = loadImage("images/draugr.png");
cyclopsImg = loadImage("images/cyclops.png");
gorgonImg = loadImage("images/gorgon.png");
minotaurImg = loadImage("images/minotaur.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  veer = createSprite(200,600,20,20);
  veer.addImage("normal",veerImg);
  veer.addImage("attacking",veerImg2);
  veer.scale = 0.2;
  gorgon = createSprite(1000,600,20,50);
  gorgon.addImage("g",gorgonImg);
  gorgon.scale = 0.5;
  minotaur = createSprite(1200,600,50,50);
  minotaur.addImage("m",minotaurImg);
  cyclops = createSprite(500,200,50,70);
  cyclops.addImage("c",cyclopsImg);
  cyclops.scale = 1.7;
  soldierGroup = new Group(); 
}

function draw() {
  background(255,255,255);  
  if(keyIsDown(LEFT_ARROW)){
    veer.changeImage("attacking");
  }

  if(keyWentUp(LEFT_ARROW)){
    veer.changeImage("normal");
  }
  spawnSoldiers();
  
    
  if(veer.isTouching(soldierGroup)){
    soldierGroup.setVelocityXEach(0);
  }
  drawSprites();
}

function spawnSoldiers(){
  
  if(frameCount%100 === 0){
    soldier = createSprite(windowWidth+200,600,20,20);
    soldier.addImage("s",soldierImg);
    soldier.scale = 0.3;
    soldier.velocityX = -3;
    soldierGroup.add(soldier);
  }
}