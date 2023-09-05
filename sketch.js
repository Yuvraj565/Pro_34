const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var helecopter, helecopter_img;
var background, background_img;
var box_sprite, box_img, box_body;
var ground, ground_sprite;
var ground2, ground2_sprite;

function preload(){
    helecopter_img = loadImage("helecopter.png");
    background_img  =loadImage("bg.jpg");
    box_img = loadImage("box.png");
}

function setup (){
 createCanvas(600, 400);

 box_sprite = createSprite(550, 50);
 box_sprite.addImage("box", box_img);
 box_sprite.scale = 0.05;

 ground_sprite = createSprite(325, 280, 40, 10)
 ground_sprite.shapeColor = "green"
 ground2_sprite = createSprite(width/2, 350, width, 10)
 ground2_sprite.shapeColor = "green"
 //ground_sprite.addImage("box", box_img);
 //ground_sprite.scale = 0.05;

 helecopter = createSprite(550, 50);
 helecopter.addImage("helecopter", helecopter_img);
 helecopter.scale = 0.1;

 engine = Engine.create();
 world = engine.world;

 box_body = Bodies.circle(box_sprite.x, box_sprite.y, 5, {restitution: 0.4, isStatic: true});
 World.add(world, box_body);


 ground = Bodies.rectangle(325, 280, 40, 10, {isStatic: true})
 ground2 = Bodies.rectangle(width/2, 350, width, 10, {isStatic: true})
 World.add(world, ground);
 World.add(world, ground2);
 


 Engine.run(engine);
}

function draw(){
    background(background_img);
    ///console.log(helecopter.x);
    box_sprite.x = box_body.position.x;
    box_sprite.y = box_body.position.y;
    keyPressed();
    drawSprites();
}

function keyPressed(){
    if(box_sprite.y === 50){
        if(keyCode ===LEFT_ARROW){
            helecopter.x = helecopter.x -10
            translation = {x:-10, y:0};
            Matter.Body.translate(box_body, translation);
          }

    }
    if(keyCode ===DOWN_ARROW){
        Matter.Body.setStatic(box_body, false);
        console.log(helecopter.x);
        helecopter.x = box_body.position.x;
        translation = {x:0, y:0}
        Matter.Body.translate(box_body, translation);
      }
    }