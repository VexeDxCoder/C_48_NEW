var img;
var song;
var theif;
var cop;
var theif_img;
var cop_img;

//This is a maze game, created ball as characters, created walls, want to add song to it 



var gameState = "serve";

function preload(){
     theif_img = loadImage("images/theif.PNG");
     cop_img = loadImage("images/cop.PNG");
     
 }


function draw (){

  //clear screen
  background("black"); 

  var ball = createSprite(360,40,10,10);
var ball2 = createSprite(31,352,10,10);
var wall1 = createSprite(387,200,10,400);
var wall2 = createSprite(200,10,400,10); 
var wall3 = createSprite(200,388,400,10);
var wall4 = createSprite(10,200,10,400);
var wall5 = createSprite(335,40,10,70);
var wall6= createSprite(295,47, 90,10);
var wall7 = createSprite(349,276,80,10);
var wall8 = createSprite(312,302,10,60);
var wall9 = createSprite(327,331,40,10);
var wall10 = createSprite(335,200,10,150);
var wall11 = createSprite(314,130,40,10);
var wall12 = createSprite(293,110,10,50);
var wall13 = createSprite(269,90,40,10);
var wall14 = createSprite(250,128,10,85);
var wall15 = createSprite(230,174,50,10);
var wall16 = createSprite(205,115,10,125);
var wall17= createSprite(177,47, 65,10);
var wall18 = createSprite(146,64,10,42);
var wall19 = createSprite(125,83,50,10);
var wall20 = createSprite(102,110,10,60);
var wall21 = createSprite(57,47,40,10);
var wall22 = createSprite(60,120,10, 140);
var wall23 = createSprite(94,184,80,10);
var wall24 = createSprite(135,183,10,60);
var wall25 = createSprite(205,216,150,10);
var wall26 = createSprite(281,190,10,60);
var wall27 = createSprite(268,260,10,80);
var wall28 = createSprite(244,305,60,10);
var wall30 = createSprite(170,350,10,70);
var wall31 = createSprite(140,313,70,10);
var wall32 = createSprite(58,323,10,120);
var wall33 = createSprite(110,262,105,10);
var wall34 = createSprite(37,90,50,10);
var wall35 = createSprite(86,240,10,40);

wall1.shapeColor ="white";
wall2.shapeColor = "white";
wall3.shapeColor = "white";
wall4.shapeColor = "white";
wall5.shapeColor = "white";
wall6.shapeColor = "white";
wall7.shapeColor = "white";
wall8.shapeColor = "white";
wall9.shapeColor = "white";
wall10.shapeColor = "white";
wall11.shapeColor = "white";
wall12.shapeColor = "white";
wall13.shapeColor = "white";
wall14.shapeColor = "white";
wall15.shapeColor = "white";
wall16.shapeColor = "white";
wall17.shapeColor = "white";
wall18.shapeColor = "white";
wall19.shapeColor = "white";
wall20.shapeColor = "white";
wall21.shapeColor = "white";
wall22.shapeColor = "white";
wall23.shapeColor = "white";
wall24.shapeColor = "white";
wall25.shapeColor = "white";
wall26.shapeColor = "white";
wall27.shapeColor = "white";
wall28.shapeColor = "white";
wall30.shapeColor = "white";
wall31.shapeColor = "white";
wall32.shapeColor = "white";
wall33.shapeColor = "white";
wall34.shapeColor = "white";
wall35.shapeColor = "white";



  



  
  ball.shapeColor = "gold";
  theif = createSprite(100, 100);
  cop = createSprite(150, 150);
  theif.addImage("theif", theif_img);
  cop.addImage("cop", cop_img);
  //img = loadImage('theif.jpg')
 // ball.scale = 0.06;
  
//img = loadImage('cop.jpg')
  //ball2.scale = 0.08;
  
  //makes the ball move according to the arrow
  if(keyDown("up")){
    ball.velocityX = 0;
    ball.velocityY = -4;
  }
  
  if(keyDown("down")){
    ball.velocityX = 0; 
    ball.velocityY = 4;
  }
  
  if(keyDown("right")){
    ball.velocityX = 4;
    ball.velocityY = 0;
  }
  
  if(keyDown("left")){
    ball.velocityX = -4;
    ball.velocityY = 0;
  }
  
   //makes the ball bounce  edges and creates edges
  createEdgeSprites();
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(wall4);
  ball.bounceOff(wall5);
  ball.bounceOff(wall6);
  ball.bounceOff(wall7);
  ball.bounceOff(wall8);
  ball.bounceOff(wall9);
  ball.bounceOff(wall10);
  ball.bounceOff(wall11);
  ball.bounceOff(wall12);
  ball.bounceOff(wall13);
  ball.bounceOff(wall14);
  ball.bounceOff(wall15);
  ball.bounceOff(wall16);
  ball.bounceOff(wall17);
  ball.bounceOff(wall18); 
  ball.bounceOff(wall19);
  ball.bounceOff(wall20);
  ball.bounceOff(wall21); 
  ball.bounceOff(wall22);
  ball.bounceOff(wall23);
  ball.bounceOff(wall24); 
  ball.bounceOff(wall25);
  ball.bounceOff(wall26);
  ball.bounceOff(wall27);
  ball.bounceOff(wall28);
                              
  ball.bounceOff(wall30); 
  ball.bounceOff(wall31); 
  ball.bounceOff(wall32);
  ball.bounceOff(wall33);
  ball.bounceOff(wall34);
  ball.bounceOff(wall35);
  
 if(ball.collide (ball2)){
     textSize(20);
     textFont("Arial");
     stroke("grey");
     fill("grey");
     
  text("He found hiM!!",177,361);

 }
 
drawSprites();

 
  
}