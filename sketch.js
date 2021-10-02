var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage,arrowGroup, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage,sound;
var score=0;
var redB,greenB,pinkB,blueB;




function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  sound=loadSound("mixkit-air-woosh-1489.mp3")
}

function setup() {
  createCanvas(600, 600);
 
  
   
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //creating new group for balloon
  redB=new Group();
  greenB=new Group();
  pinkB=new Group();
  blueB=new Group();
  arrowGroup=new Group();
}


function draw() {
 
  
  background.velocityX = -3 

  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+5
  }
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+4
  }
    if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1
  }
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2
  }
   if (background.x < 0){
  background.x = background.width/2;
}
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y;
  }
  
  
   var select_balloon=Math.round(random(1,4));
  
    
if(World.frameCount%80==0){
    if(select_balloon==1) {
      red_ballloon();
    } else if(select_balloon==2){
      green_ballloon();
    } else if(select_balloon==3){
      blue_ballloon();
    } else if(select_balloon==4){
      pink_ballloon(); 
    } 
  }


  
  drawSprites();
  textSize(18)
  text("score:"+score,500,20)
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  sound.play();
  arrow.velocityX = -6;
  arrow.lifetime=50
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  return arrow;
}

function red_ballloon(){
  var red=createSprite(0,Math.round(random(20,370)));
  red.addImage(red_balloonImage);
  red.velocityX=4;
  red.lifetime=150;
  red.scale=0.1
  redB.add(red);
   return red;
}

function green_ballloon(){
  var green=createSprite(0,Math.round(random(20,370)));
  green.addImage(green_balloonImage);
  green.velocityX=5.2;
  green.lifetime=150;
  green.scale=0.1
  greenB.add(green)
  return green;
}

function blue_ballloon(){
  var blue=createSprite(0,Math.round(random(20,370)));
  blue.addImage(blue_balloonImage);
  blue.velocityX=5;
  blue.lifetime=150;
  blue.scale=0.1
  blueB.add(blue);
   return blue;
}

function pink_ballloon(){
  var pink=createSprite(0,Math.round(random(20,370)));
  pink.addImage(pink_balloonImage);
  pink.velocityX=6;
  pink.lifetime=130;
  pink.scale=1
  pinkB.add(pink);
   return pink;
}