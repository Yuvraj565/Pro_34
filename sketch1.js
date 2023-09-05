
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/

let engine;
let world;


var helecopter;
var ground;
var helecopter_img;
var right_wall, left_wall;

function preload(){
  helecopter_img = loadImage("helecopter.png");
  background_img  =loadImage("bg.jpg")
}

function setup() {
  createCanvas(600,400);

  helecopter = createSprite(300, 200, 100, 50);
  //helecopter.shapeColor = "green"
  helecopter.addImage("helecopter", helecopter_img);
  helecopter.scale = 0.1
  console.log(helecopter);
  
  engine = Engine.create();
  world = engine.world;

  
  


  var options = {
    isStatic: true
  }

  //ground = Bodies.rectangle(0, height-2, width*2, 4, options);
  //left_wall = Bodies.rectangle(0, 0, 4, height*2, options);
  //right_wall = Bodies.rectangle(width-4, 0, 4, height*2, options);
  //World.add(world, ground);
  //World.add(world, left_wall);
 // World.add(world, right_wall);
  fill("black");
  
}


function draw() 
{
  background(background_img);
  
  //console.log(helecopter.x);

  //rect(ground.position.x, ground.position.y, width*2, 1,);
 // rect(left_wall.position.x, left_wall.position.y, 3, height*2);
 // rect(right_wall.position.x, right_wall.position.y, 3, height*2);

  if(keyDown("LEFT_ARROW")){
    helecopter.x -= 10
    
  }
  Engine.update(engine);
  drawSprites();
}



