const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var rightrect, leftrect;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width / 2, 670, width, 20)
	rightrect = new Ground(650, 600, 20, 120)
	leftrect = new Ground(500, 600, 20, 120)

	var ballop = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2

	}
	ball = Bodies.circle(200, 100, 20, ballop)
	World.add(world, ball)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	ground.display();
	rightrect.display()
	leftrect.display()
	ellipse(ball.position.x, ball.position.y, 40, 40)
	drawSprites();

}

function  keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
	}
}