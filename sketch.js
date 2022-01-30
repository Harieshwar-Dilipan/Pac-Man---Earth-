var bread;
var log1,log2,log3,log4,log5,log6,log7,log8,log9,logImage,logImage2;
var bg;
var pacman,pacmanImage
var logGroup;
var pUp,pDown,pLeft,pRight,pClose
var score=0;

function preload(){
  bread=loadImage("./assets/Bread.png");
  logImage=loadImage("./assets/texture.png");
  bg=loadImage("./assets/bg.jpg");
  logImage2=loadImage("./assets/treeV.png")
  pacmanImage=loadAnimation("./assets/3.png")
  pUp=loadAnimation("./assets/1.png","./assets/6.png")
}

function setup(){
createCanvas(1478,715);

logGroup=new Group()

pacman=createSprite(150,630,50,50);
pacman.addAnimation("still",pacmanImage);
pacman.addAnimation("up",pUp)
pacman.scale=1.5
pacman.debug=false;
 pacman.setCollider("circle",-5,2,17);

log1=createSprite(650,300,100,50);
log1.shapeColor="brown"
logGroup.add(log1);

log2=createSprite(360,300,width/2-1000,50)
log2.shapeColor="brown"
logGroup.add(log2);

log3=createSprite(730,200,50,width/2-1000);
log3.shapeColor="brown"
logGroup.add(log3);

log4=createSprite(195,400,50,width/2-1000)
log4.shapeColor="brown"
logGroup.add(log4);

log5=createSprite(100,560,width/2-1000,50)
log5.shapeColor="brown"
logGroup.add(log5);

log6=createSprite(100,700,width/2-1000,50)
log6.shapeColor="brown"
logGroup.add(log6);

log7=createSprite(460,700,250,50)
log7.shapeColor="brown"
logGroup.add(log7);

log8=createSprite(365,530,50,150);
log8.shapeColor="brown"
logGroup.add(log8);

log9=createSprite(460,425,250,50);
log9.shapeColor="brown";
logGroup.add(log9);

log10=createSprite(620,550,50,310);
log10.shapeColor="brown";
logGroup.add(log10);

log11=createSprite(830,500,250,50);
log11.shapeColor="brown"
logGroup.add(log11);

log12=createSprite(830,700,250,50);
log12.shapeColor="brown"
logGroup.add(log12);

log13=createSprite(960,650,50,130);
log13.shapeColor="brown"
logGroup.add(log13);

log14=createSprite(470,170,50,200)
log14.shapeColor="brown"
logGroup.add(log14);

log15=createSprite(1200,500,300,50);
log15.shapeColor="brown";
logGroup.add(log15);

log16=createSprite(1300,650,50,130);
log16.shapeColor="brown";
logGroup.add(log16);

log17=createSprite(1100,650,50,130);
log17.shapeColor="brown";
logGroup.add(log17);

log18=createSprite(620,130,50,260);
log18.shapeColor="brown";
logGroup.add(log18);

log19=createSprite(1000,350,50,250);
log19.shapeColor="brown";
logGroup.add(log19);

log20=createSprite(850,250,50,250);
log20.shapeColor="brown";
logGroup.add(log20);

log21=createSprite(210,90,450,50)
log21.shapeColor="brown";
logGroup.add(log21);

log22=createSprite(1150,350,50,150);
log22.shapeColor="brown";
logGroup.add(log22);

log23=createSprite(1300,250,50,250);
log23.shapeColor="brown"
logGroup.add(log23);

log24=createSprite(1050,150,250,50);
log24.shapeColor="brown";
logGroup.add(log24);
}

function draw(){
  background("green");
  drawSprites();
  pacmanMovement();
  
  textSize(30);
  fill("white");
  textAlign(CENTER);
  textFont("Courier New");
  strokeWeight(3);
  stroke("red")
  text("Ghost Slayed: "+score,1250,50)
  
}

function pacmanMovement(){
  if(keyDown("w")){
    pacman.velocityY=-2
    pacman.changeAnimation("up",pUp);
  }
  if(keyWentUp("w")){
    pacman.velocityY=0
    pacman.changeAnimation("still",pacmanImage);
  }

  if(keyDown("s")){
    pacman.velocityY=2
  }
  if(keyWentUp("s")){
    pacman.velocityY=0
  }

  if(keyDown("a")){
    pacman.velocityX=-2
  }
  if(keyWentUp("a")){
    pacman.velocityX=0
  }

  if(keyDown("d")){
    pacman.velocityX=2
  }
  if(keyWentUp("d")){
    pacman.velocityX=0
  }

  pacman.bounceOff(logGroup);

}






