var bgImg;
var sadBox,SadboxImg,HappyImg;
var bound1,bound2,bound3,bound4;
var maze;
var fire,fireIMG,obs1,obs2,obsIMG;
var gameState=1;
var start=1;
var play =2;
var end=3;

function preload () {
  bgImg=loadImage("./assets/background.jpeg");

  HappyImg=loadImage("./assets/happy-smiling-present-christmas-gift-box-cartoon-vector-28338240-removebg-preview.png")

  SadboxImg=loadImage("./assets/sad.png");

  fireIMG=loadImage("./assets/bos-unscreen.gif");

  obsIMG=loadImage("./assets/obs1-removebg-preview.png");
}

function setup(){
  createCanvas(500,500)

   sadBox=createSprite(30,105,50,40)
  sadBox.addImage("Sad",SadboxImg)
  sadBox.scale=0.09;
  sadBox.addImage("happy",HappyImg)

  fire=createSprite(400,340,50,40)
  fire.addImage("fire",fireIMG)
  fire.scale=0.2;

   maze = new Group()

  bound1=createSprite(250,440,420,20);
  bound1.shapeColor=('yellow')
  bound2=createSprite(450,200,20,280);
  bound2.shapeColor=('yellow')
  bound3=createSprite(250,52,420,20);
  bound3.shapeColor=('yellow')
  bound4=createSprite(50,290,20,280);
  bound4.shapeColor=('yellow')
  
  var wall1 = createSprite(150,115,20,110);
  wall1.shapeColor=('green')
  var wall2 = createSprite(190,180,100,20);
  wall2.shapeColor=('green')
  var wall3 = createSprite(225,250,150,20);
  wall3.shapeColor=('green')
  var wall4 = createSprite(230,310,20);
  wall4.shapeColor=('green')
  var wall5 = createSprite(220,350,180,20);
  wall5.shapeColor=('green')
  var wall6 = createSprite(300,390,20,80);
  wall6.shapeColor=('green')
  var wall7 = createSprite(400,305,80,20);
  wall7.shapeColor=('green')
  var wall8 = createSprite(350,165,20,90);
  wall8.shapeColor=('green')
  var wall9 = createSprite(380,155,40,20);
  wall9.shapeColor=('green')
  var wall10 = createSprite(400,205,90,20);
  wall10.shapeColor=('green')
  var wall11= createSprite(370,350,20,80);
  wall11.shapeColor=('green')
  var wall12 = createSprite(430,400,20,60);
  wall12.shapeColor=('green')
  var wall13 = createSprite(120,140,40,20);
  wall13.shapeColor=('green')
  var wall14 = createSprite(70,305,30,20);
  wall14.shapeColor=('green')
  var wall15 = createSprite(170,420,20,30);
  wall15.shapeColor=('green')

   maze.add(wall1);
   maze.add(wall2);
   maze.add(wall3);
   maze.add(wall4);
   maze.add(wall5);
   maze.add(wall6);
   maze.add(wall7);
   maze.add(wall8);
   maze.add(wall9);
   maze.add(wall10);
   maze.add(wall11);
   maze.add(wall12);
   maze.add(wall13);
   maze.add(wall14);
   maze.add(wall15);
   maze.add(bound1);
   maze.add(bound2);
   maze.add(bound3);
   maze.add(bound4);
}

function draw (){
  
 background(bgImg)

 sadBox.collide(maze);

 if(sadBox.x<=0|| sadBox.x>=500){
  sadBox.x=30
  sadBox.y=105
 }
 if(sadBox.y<=0|| sadBox.y>=500){
  sadBox.x=30;
  sadBox.y=105;
 }

if(gameState===start){

  textSize(50);
  fill("RED")
  text("Press S to start",50,250);

  sadBox.changeImage("Sad");

  if(keyDown("S")){
    gameState=play;
  }
}

  if(gameState===play){
if(keyIsDown(RIGHT_ARROW)){
  sadBox.x=sadBox.x+5
};

if(keyIsDown( LEFT_ARROW)){
  sadBox.x=sadBox.x-5
};

if(keyIsDown(UP_ARROW)){
  sadBox.y=sadBox.y-5
};

if(keyIsDown(DOWN_ARROW)){
  sadBox.y=sadBox.y+5
};

if(sadBox.isTouching(fire)){
  gameState=end;
 }

 drawSprites();
}
 if(gameState===end){
  
  sadBox.changeAnimation('happy');

  textSize(26);
  fill("red")
  text("Game Over Congrats You Have Won !!😁",10,230);
  text("Press R to Restart",130,280);

  if(keyDown("R")){
    gameState=start;
    sadBox.x=30;
    sadBox.y=105;
  }
 }


}