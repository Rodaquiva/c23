const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var angle;

var ground, tower, towerImg, cannon, cannonImg;
var backgroundImg;
var bola; 

function preload() {
 backgroundImg = loadImage("imagen/background.gif");
 towerImg = loadImage("imagen/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15;

  var options = {
    isStatic: true
  }
 ground = Bodies.rectangle(0,height-1, width*2, 1, options);
 World. add(world, ground);

 tower = Bodies.rectangle(160, 350, 160, 310, options);
 World.add(world, tower);

 cannon = new Cannon(180,110,130,100,angle);
 bola = new CannonBall(cannon.x, cannon.y);
 
}

function draw() {
  // background(backgroundImg);
  image(backgroundImg, 0,0 , 1200,600);
  Engine.update(engine);
  
   rect(ground.position.x, ground.position.y, width*2, 1);

   push();
   imageMode(CENTER);
   image(towerImg, tower.position.x, tower.position.y, 160,310);
   pop();

   cannon.display();
   bola.display();
}
function keyReleased(){
  if (keyCode===DOWN_ARROW){
    bola.shoot();
  }
}
