const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world, ground1, leftSide, rightSide, ball;
var button1, button2;

function setup(){
    createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(650,650,width,30);
    leftSide = new Ground(900,565,25,200);
    rightSide = new Ground(1100,565,25,200);

    var ball_options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0,
        density: 1.2
    }

    ball = Bodies.circle(400,75,25,ball_options);
    World.add(world,ball);


    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw(){
    background(0);

    Engine.update(engine);

    ground1.display();
    leftSide.display();
    rightSide.display();
    
    keyPressed();

    ellipse(ball.position.x,ball.position.y,25);
}

function horizontalForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:0});
}

function verticalForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-1});
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        horizontalForce();
    }
    if(keyCode === DOWN_ARROW){
        verticalForce();
    }
}