
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var thread1, thread2, thread3, thread4, thread5;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    bob1 = new Bob(300,350,50);
	bob2 = new Bob(350,350,50);
	bob3 = new Bob(400,350,50);
	bob4 = new Bob(450,350,50);
	bob5 = new Bob(500,350,50);

	ground = new Ground(400,100,300,40);

	thread1 = new Rope(bob1.body,ground.body,-50*2,0);
	thread2 = new Rope(bob2.body,ground.body,-25*2,0);
	thread3 = new Rope(bob3.body,ground.body,-0*2,0);
	thread4 = new Rope(bob4.body,ground.body,25*2,0);
	thread5 = new Rope(bob5.body,ground.body,50*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  ground.display();

  thread1.display();
  thread2.display();
  thread3.display();
  thread4.display();
  thread5.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(bob3.body, bob5.body.position,{x:75,y:-75})	}
}



