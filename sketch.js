var tower,toweri;
var ghost,ghosti;
var door,doori;
var rack,racki;
var irack;
var groupd,groupc,groupi;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var end;

function preload(){
 toweri=loadImage("tower.png"); 
 ghosti=loadImage("ghost-standing.png");
 doori=loadImage("door.png");
  racki=loadImage("climber.png");
}

function setup(){
  createCanvas(400,400);
  tower=createSprite(200,200,10,10);
  tower.addImage(toweri);
  tower.velocityY=3;
  tower.scale=0.7;
  
  ghost=createSprite(200,300,10,10);
  ghost.addImage(ghosti);
  ghost.scale=0.3;
  
  groupd=new Group();
  groupc=new Group();
  groupi=new Group();
  
 ghost.setCollider("circle",0,0,50);
 ghost.debug=true; 
}

function draw(){
 
  if(gameState===PLAY){
    if(keyDown("space")){
    ghost.velocityY=-10;
  }
  if(keyDown("left")){
    ghost.velocityX=-5;
  }
  if(keyWentUp("left")){
    ghost.velocityX=0;
  }
  if(keyDown("right")){
    ghost.velocityX=5;
  }  
    if(keyWentUp("right")){
    ghost.velocityX=0;
  }
    if(ghost.y>400){
    gameState=END;
  }
    if(ghost.isTouching(groupi)){
       gameState=END;
       }
  }
  
  if(tower.y>300){
   tower.y=200;
 }
  
  
 
  
  if(groupc.isTouching(ghost)){
     ghost.y=rack.y-30;
     }
  
ghost.velocityY = ghost.velocityY + 0.8
  
  if(gameState===END){
   end=createSprite(200,200,400,400);
   end.shapeColor="black";
    
  }
  
  doors();
  racks();
  iracks();
  drawSprites();
}

function doors(){
  if(frameCount%200===0){
    door=createSprite(100,-50,10,10);
    door.x=Math.round(random(100,300));
    door.velocityY=3;
    door.addImage(doori);
    door.scale=0.6;
    door.lifetime=200;
    groupd.add(door);
  }
}
function racks(){
  if(frameCount%200===0){
    rack=createSprite(100,0,10,10);
     rack.x=door.x;
     rack.y=door.y+40;
     rack.velocityY=3;
     rack.addImage(racki);
    rack.scale=0.6;
    ghost.depth = rack.depth;
    rack.depth = rack.depth + 1;
    groupc.add(rack);
    rack.debug=true;
    rack.setCollider("rectangle",0,0,80,5);
  }
}
function iracks(){
  if(frameCount%200===0){
    irack=createSprite(100,0,80,5);
    irack.x=rack.x;
    irack.y=rack.y+13;
    irack.velocityY=3;
   // irack.visible=false;
    irack.shapeColor="red";
    groupi.add(irack);
    irack.debug=true;
  }
}