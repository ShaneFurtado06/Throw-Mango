
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var s1,ss1;

function preload(){
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	s1=new Stone(240,420);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	m1=new mango(1100,100,30);
	m2=new mango(1200,250,30);
	m3=new mango(1000,100,30);
	m4=new mango(1000,250,30);
	m5=new mango(900,200,30);


	ss1=new SlingShot(s1.body,{x:240,y:420});
	
	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	});*/

	Engine.run(engine); 
}

function draw() {

  background(230);

  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  textSize(20);
  fill("black");
  text("PRESS 'SPACE' TO START AGAIN",30,40);
Engine.update(engine);
  treeObj.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  s1.display();

  ss1.display();

  groundObject.display();

  console.log(m1.body.speed);

  detectCollision(m1,s1);
  detectCollision(m2,s1);
  detectCollision(m3,s1);
  detectCollision(m4,s1);
  detectCollision(m5,s1);
}

function mouseDragged(){
	Matter.Body.setPosition(s1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	ss1.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(s1.body,{x:240,y:240});
		ss1=new SlingShot(s1.body,{x:240,y:420});
	}
}

/*function detectCollision(lMango,lStone){
	var mp=lMango.body.position;
	var sp=lStone.body.position;

	var distance=dist(mp.x,mp.y,sp.x,sp.y);
console.log(lStone.r+lMango.r);

	if(distance<=(lStone.r+lMango.r)){
		Matter.Body.setStatic(lMango.body,false);
	}
}*/

function detectCollision(lmango,lstone){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }
}