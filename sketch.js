
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage,treeImage;
var villageImage;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;
var boy, stone, ground, tree,slingShot;

function preload()
{
	boyImage = loadImage("sprites/Plucking mangoes/boy.png");
	treeImage = loadImage("sprites/Plucking mangoes/tree.png");
	//bg = loadImage("sprites/plucking mangoes/b.jpg");
	
}

function setup() {
	createCanvas(1300, 600);
	background("sprites/plucking mangoes/b.jpg");
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	mango1 = new Mango(1300-200,300-100,30);
	mango2 = new Mango(1180-200,230-100,30);
	mango3 = new Mango(1340-200,230-100,30); 
	mango4 = new Mango(1380-200,390-120,30);
	mango5 = new Mango(1000-200,320-100,30);
	mango6 = new Mango(1190-200,340-100,30); 
	mango7 = new Mango(1250-200,170-100,30);
	mango8 = new Mango(1420-200,310-100,30);
    mango9 = new Mango(1080-200,340-100,30);

	ground = new Ground (700,580,1400,10);

	stone = new Stone(140,432,30);

	slingShot = new SlingShot(stone.body, {x:140 , y:432});
	//basket = new Basket(1000,600,50,50);
	
	Engine.run(engine);
	Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

    boy = createSprite(200,500,30,50);
	boy.addImage(boyImage);
	boy.scale = 0.12;

    tree = createSprite(1000,300,30,50);
	tree.addImage(treeImage);
	tree.scale = 0.5;

  drawSprites();

	push();
	stroke("black");
	strokeWeight(5);
	textSize(30);
	fill("white");
	text("drag the stone with mouse and hit the mangoes",50,30);
	text("press 'SPACE' to get second chance",50,70);
	pop();

	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	slingShot.display();
	stone.display();

	/*detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);*/

 
}

  // textSize(30);
  // text("Press 'SPACE' to get second chance",400,50);


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function detectCollision(lstone, lmango)
{
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:280, y:575})
		slingShot.attach(stone.body);
	}
}

