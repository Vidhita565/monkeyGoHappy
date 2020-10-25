var back,backImg;
var monkey,monImg,mon;
var obstacle,o1;
var banana,b1;
var PLAY;
var END;
var score;
var invisibleGround;
var gameState;
var bananaGroup;
var ObstacleGroup;

function preload(){
  backImg=loadImage("jungle.jpg");
  monImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  o1=loadImage("stone.png");
  b1=loadImage("banana.png");
  mon=loadImage("Monkey_01.png");
}


function setup() {
  createCanvas(600, 600);
  back=createSprite(200,100,400,400);
  back.addImage(backImg);
  back.x=back.width/2;
  back.scale=1;
  
 monkey=createSprite(75,300,20,20);
  monkey.addAnimation("running",monImg);
  monkey.scale=0.3;
  ObstaclesGroup=createGroup;
  score=0;
  PLAY=1;
  END=0;
  gameState=PLAY;
  invisibleGround=createSprite(200,380,600,10);
  invisibleGround.visible=false;
   bananaGroup = new Group();
  ObstacleGroup=new Group();
}




function draw() {
  background(220);
  back.velocityX=-4;
  
   monkey.velocityY=monkey.velocityY+0.8;
  
  
  
if(back.x<80){
  back.x=back.width/2;
}
  
  
  if(keyDown("space") && monkey.y>250){
    monkey.velocityY=-10;
  }
 
   monkey.collide(invisibleGround);
  
   if(gameState === PLAY){
    
   spawnObstacles();
  
  spawnBanana();
  
  

  if (monkey.isTouching(bananaGroup)) {
   score=score+1;
   bananaGroup.destroyEach();
  }
   }
   
    if(ObstacleGroup.isTouching(monkey)){
      
     gameState=END;
      monkey.destroy();
      monkey=createSprite(75,300,20,20);
      monkey.addImage(mon);
      monkey.scale=0.3;
     
    }
  
  switch(score){
    case 10: monkey.scale=0.32;
      break;
      case 20: monkey.scale=0.34;
      break;
      case 30: monkey.scale=0.36;
      break;
      case 40: monkey.scale=0.38;
      break
      case 50: monkey.scale=0.40;
      break;
      default:break;
      
      
      
      
  }
  
 
  if(gameState===END){
  back.velocityX=0;
    back.velocityY=0;
    bananaGroup.setVelocityXEach(0);
      ObstacleGroup.setVelocityXEach(0);
    
  }

  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
  text("SCORE:"+score,400,30);

}

function spawnObstacles(){
  if(frameCount % 200 ===0){
    
   obstacle = createSprite(600,350,10,40);
    obstacle.velocityX = -6;
    
   obstacle.addImage(o1);
    
    obstacle.scale=0.2;
    ObstacleGroup.add(obstacle);
   
  }
}


function spawnBanana(){
  if(frameCount % 100 ===0){
    
   banana = createSprite(600,150,10,40);
    banana.velocityX = -5;
    banana.y=random(10,150);
    
   banana.addImage(b1);
    
   banana.scale=0.1;
   
     bananaGroup.add(banana);
    
   
  }
}


