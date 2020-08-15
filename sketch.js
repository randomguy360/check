
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 box1 = new Box(400,300,300,50);
	 ball1 = new Ball(200,600,20);
	 ball2 = new Ball(250,600,20);
	 ball3 = new Ball(250,600,20);
	 ball4 = new Ball(300,600,20);
	 ball5 = new Ball(350,600,20);
	 rope1 = new Rope(ball1.body,{x:310,y:300})
	 rope2 = new Rope(ball2.body,{x:350,y:300})
	 rope3 = new Rope(ball3.body,{x:390,y:300})
	 rope4 = new Rope(ball4.body,{x:430,y:300})
	 rope5 = new Rope(ball5.body,{x:470,y:300})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  box1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}



