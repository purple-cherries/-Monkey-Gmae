
var monkey , monkey_running
var bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);

  monkey = createSprite(50,175,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1 
  
  ground = createSprite(300,200,1200,20);
  
  FoodGroup = new Group();

  score = 0
}


function draw() {
    background("white");
  text("Score: "+ score, 500,50);
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+ survivalTime, 500,30)
  
  if(keyDown("space")&& monkey.y>= 130) {
        monkey.velocityY = -12;
       
    }
  
  //add gravity
    monkey.velocityY = monkey .velocityY + 0.8
  
  monkey.collide(ground)
  
  
  
  ground.velocityX = -4
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  treats();
  obstacles();

  drawSprites();
}

function treats(){
   if (frameCount % 80 === 0) {
    var banana = createSprite(600,50,10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.07
  banana.y = Math.round(random(10,110));
  banana.velocityX = -3;
  banana.lifetime = 200;
  FoodGroup.add(banana);
}}

function obstacles(){
   if (frameCount % 300 === 0){
    obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -6 
     obstacle.addImage(obstacleImage)
     obstacle.scale = 0.15;
     obstacle.lifetime = 200;
}}






