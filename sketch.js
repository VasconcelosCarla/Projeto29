const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var polygon_img;
var slingShot;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(708,200,185,10);
  //ordenei os levels para entender o que ficava em cima do que
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top
  block16 = new Block(390,155,30,40);

  //segundo retângulo
  block17 = new Block(690,175,27,37);
  block18 = new Block(760,187,27,37);
  block19 = new Block(743,175,27,37);
  block20 = new Block(720,187,27,37);
  block21 = new Block(670,175,27,37);
  block22 = new Block(650,187,27,37);
  block23 = new Block(743,150,27,37);
  block24 = new Block(720,150,27,37);
  block25 = new Block(690,150,27,37);
  block26 = new Block(670,150,27,37);
  block27 = new Block(690,120,27,37);
  block28 = new Block(720,120,27,37);
  block29 = new Block(705,80,27,37);
  
  //polygon and slingShot
  polygon = new Bodies.circle(50,200,20);
  World.add(world,polygon);
  // o nome da classe é SlingShot e vc tinha escrito slingshot
  slingShot = new SlingShot(this.polygon,{x:100,y:200});
  
}
  
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
 
  fill("grey");
  block16.display();
  
  fill("white");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  
  
  fill("turquoise");
  
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display(); 
  block29.display(); 
 /*vc tinha adicionado a imageMode e a image na function setup e tbm estava
 usando a polygon vez polygon, vez poligon. e vc tem que pedir pra printar o 
 slingShot e não o polygon, pq vc ta criando é o slingShot quando cria o objeto*/ 
  imageMode(CENTER);
  image(polygon_img, polygon.position.x ,polygon.position.y,40,40);

  slingShot.display();

}
