const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var st1, st2;
var ground1;
var B1, B2, B3, B4, B5, B6, B7;
var B8, B9, B10, B11, B12;
var B13, B14, B15;
var B16;
var b1, b2, b3, b4, b5;
var b6, b7, b8;
var b9;
var polygon1;
var slingshot1;
var engine, world;

function setup(){
    createCanvas(1000, 400);
	engine = Engine.create();
	world = engine.world;


    st1 = new Stand(400,300,200,10);
    st2 = new Stand(700,190,150,10);
    ground1 = new Ground(500,390,1000,20);




    B1 = new Block(400,270,20,30);
    B2 = new Block(390,270,20,30);
    B3 = new Block(380,270,20,30);
    B4 = new Block(410,270,20,30);
    B5 = new Block(420,270,20,30);
    B6 = new Block(430,270,20,30);
    B7 = new Block(350,270,20,30);


    B8 = new Block(400,250,20,30);
    B9 = new Block(390,250,20,30);
    B10 = new Block(380,250,20,30);
    B11 = new Block(410,250,20,30);
    B12 = new Block(420,250,20,30);


    B13 = new Block(400,230,20,30);
    B14 = new Block(390,230,20,30);
    B15 = new Block(410,230,20,30);


    B16 = new Block(400,210,20,30);


    b1 = new Block(700,175,20,30);
    b2 = new Block(710,175,20,30);
    b3 = new Block(720,175,20,30);
    b4 = new Block(690,175,20,30);
    b5 = new Block(680,175,20,30);


    b6 = new Block(700,160,20,30);
    b7 = new Block(710,160,20,30);
    b8 = new Block(690,160,20,30);


    b9 = new Block(700,145,20,30);
    


    polygon1 = new Polygon(mouseX,mouseY,50,50);
    slingshot1 = new Slingshot(polygon1.body,{x:155,y:125})



	Engine.run(engine);
}
function draw(){
    background("white");

    Engine.update(engine)
    slingshot1.display();
    ground1.display();
    polygon1.display();
    st1.display();
    st2.display();




    fill("lightblue");
    B1.display();
    B2.display();
    B3.display();
    B4.display();
    B5.display();
    B6.display();
    B7.display();
    fill("pink");
    B8.display();
    B9.display();
    B10.display();
    B11.display();
    B12.display();
    fill("turquoise");
    B13.display();
    B14.display();
    B15.display();
    fill("grey");
    B16.display();


    fill("lightblue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    fill("turquoise");
    b6.display();
    b7.display();
    b8.display();
    fill("pink");
    b9.display();
}





function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});


}



function mouseReleased(){
    slingshot1.fly();

}

function keyPressed(){
    if(keyCode === 32){
        slingshot1.attach(polygon1.body);
    }
  }