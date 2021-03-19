
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,moango2,mango3,manago4,mango5;
var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
	stone=loadImage("image/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1300,100,30);
	mango3=new mango(1400,100,30);
	mango4=new mango(1500,100,30);
	mango5=new mango(1600,100,30);
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new stone(210,340,10,10);
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  stone.display();
  groundObject.display();
  detectollistion(stoneObject,mongo1);
  detectollistion(stoneObject,mongo2);
  detectollistion(stoneObject,mongo3);
  detectollistion(stoneObject,mongo4);
  detectollistion(stoneObject,mongo5);
  
}
function detectollistion(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,monkeyBodyPosition.x,monkeyBody.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
if(keyCode===32){
	Matter.Body.setPosition(stoneObject,body,{x:235,y:420})
	launcherObject.attach(stoneObject,body);
}
}
