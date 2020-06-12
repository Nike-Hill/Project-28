const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground, box, box2, box3, ball, launcher;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,height,800,20)
	box = new TrashCan(535,550,20,100);
	box2 = new TrashCan(600,600,100,20);
	box3 = new TrashCan(655,550,20,100);

	ball = new Paper(100,680,30);

	launcher = new Launcher(ball.body,{x: 200, y: 100});

  
}


function draw() {
  background(255);
  
	Engine.update(engine);
  ground.display();
  box.display();
  box2.display();
  box3.display();
  ball.display();
  launcher.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}


