const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2
var score = 0

function preload (){
hexagonImage = loadImage("images.png")
}






function setup() {
  createCanvas(1000,600)
  engine=Engine.create()
  world=engine.world
  fill("darkblue")
  ground = new Ground(width/2, height-20, width, 20)
  stand1 = new Ground(400, 500, 300, 20)
  stand2 = new Ground(800, 300, 300, 20)
  
  //level 0ne
  box1 = new Box(320, 480, 50, 50);
  box2 = new Box(350, 480, 50, 50);
  box3 = new Box(380, 480, 50, 50);
  box4 = new Box(410, 480, 50, 50);
  box5 = new Box(440, 480, 50, 50);
  box6 = new Box(470, 480, 50, 50);
  //level two
  box7 = new Box(350, 440, 50, 50);
  box8 = new Box(370, 440, 50, 50);
  box9 = new Box(400, 440, 50, 50);
  box10 = new Box(460, 440, 50, 50);
  //level three
  box11 = new Box(370.8, 400, 50, 50);
  box12 = new Box(410.5, 400, 50, 50);
  //level four(Top)
  box13 = new Box(390.8, 360, 50, 50);

//level 0ne(Stand two)
box14 = new Box(680.1, 280, 50, 50);
box15 = new Box(740, 280, 50, 50);
box16 = new Box(780.5, 280, 50,50);
box17 = new Box(820, 280, 50, 50);
box18 = new Box(870, 280, 50, 50);
box19 = new Box(900, 280, 50, 50);
//level two(Stand two)
box20 =new Box(740, 260, 50, 50);
box21 = new Box(780, 260, 50, 50);
box22 = new Box(820, 260, 50, 50);
box23 = new Box(870, 260, 50, 50);
//level three(Stand two)
box24 = new Box(780, 240, 50, 50);
box25 = new Box(820, 240, 50, 50);
//level four(Stand two)(top)
box26 = new Box(800., 220, 50, 50);

//polygon holder with slings
polygon = Bodies.circle(50, 200, 20, {density:1.2});
World.add(world,polygon);


slingshot = new SlingShot(polygon,{x:190,y:330});
}

function draw() {
  background(255,255,255);
  textSize(30)
  fill("orange")
  text("score " +score,width-300,50)

  Engine.update(engine)
  fill("darkblue")
  ground.display()
  stand1.display()
  stand2.display()
  fill("lightblue")  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  fill("red")
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  fill("orange")
  box11.display()
  box12.display()
  fill("yellow")
  box13.display()
  fill("lightblue")
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  fill("red")
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  fill("orange")
  box24.display()
  box25.display()
  fill("yellow")
  box26.display()
  slingshot.display()

          box1.score();
          box2.score();
          box3.score();
          box4.score();
          box5.score();
          box6.score();
          box7.score();
          box8.score();
          box9.score();
          box10.score();
          box11.score();
          box12.score();
          box13.score();
          box14.score();
          box15.score();
          box16.score();
          box17.score();
          box18.score();
          box19.score();
          box20.score();
          box21.score();
          box22.score();
          box23.score();
          box24.score();
          box25.score();
          box26.score();
          
          
          
imageMode(CENTER)
image(hexagonImage, polygon.position.x, polygon.position.y, 60, 60)

}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(this.polygon);
  }
}









