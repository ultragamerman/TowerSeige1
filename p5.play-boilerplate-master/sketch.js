const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2,rock1,launcher1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var gameState = "onSling";

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  platform1 = new platform(500,500,150,10);
  platform2 = new platform(700,300,150,10);

  rock1 = new rock(200,440,20);

  box1 = new box(465,490,20,25);
  box2 = new box(485,490,20,25);
  box3 = new box(505,490,20,25);
  box4 = new box(525,490,20,25);
  box5 = new box(545,490,20,25);
  box6 = new box(475,465,20,25);
  box7 = new box(495,465,20,25);
  box8 = new box(515,465,20,25);
  box9 = new box(535,465,20,25);
  box10 = new box(480,420,20,25);
  box11 = new box(500,420,20,25);
  box12 = new box(520,420,20,25);
  box13 = new box(490,395,20,25);
  box14 = new box(510,395,20,25);
  box15 = new box(500,380,20,25);
  box16 = new box(660,282.5,20,25);
  box17 = new box(680,282.5,20,25);
  box18 = new box(700,282.5,20,25);
  box19 = new box(720,282.5,20,25);
  box20 = new box(740,282.5,20,25);
  box21 = new box(670,257.5,20,25);
  box22 = new box(690,257.5,20,25);
  box23 = new box(710,257.5,20,25);
  box24 = new box(730,257.5,20,25);
  box25 = new box(680,232.5,20,25);
  box26 = new box(700,232.5,20,25);
  box27 = new box(720,232.5,20,25);
  box28 = new box(690,207.5,20,25);
  box29 = new box(710,207.5,20,25);
  box30 = new box(700,182.5,20,25);

 launcher1 = new launcher(rock1.body,{x:200,y:440});

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  platform1.display();
  platform2.display();

  rock1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

 launcher1.display();
  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  launcher1.fly();
  gameState = "launched";
}   

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(rock1.body,{x:200,y:440});
     launcher1.attach(rock1.body);
     gameState = "onSling"
  }
}