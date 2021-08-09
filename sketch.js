const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box 
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
var box_bounce = {
    restitution : 1
}
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

   
    box = Bodies.circle(250,50,20,box_bounce);
    World.add(world,box);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipse(box.position.x,box.position.y,40);
    rect(ground.position.x,ground.position.y,400,20);
}