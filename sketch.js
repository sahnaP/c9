var ball;

function setup(){
  createCanvas(500,600);
  
  ball=createSprite(250,300,25,25);
  ball.shapeColor="teal";
}

function draw(){
 background("white");

 //move the sprite 
 //ASCII - American Standard Code for Information Interchange
 //left
 if(keyCode === 37 ){
  ball.velocityX=-3
 }
 //up 38
 if(keyCode === 38 ){
  ball.velocityY=-3
 }


 //right 39
 if(keyCode === 39 ){
  ball.velocityX=3
 }
 //down 40
 if(keyCode === 40 ){
  ball.velocityY=3
 }
 drawSprites();
}