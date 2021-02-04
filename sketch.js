const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var ground;
function preload(){

}
function setup(){
 createCanvas(1400,800)
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    block1=new Block(560,470,40,60);
    block2=new Block(600,470,40,60);
    block3=new Block(640,470,40,60);
    block4=new Block(680,470,40,60);
    block5=new Block(720,470,40,60);
    block6=new Block(760,470,40,60);
    block7=new Block(800,470,40,60);
    block8=new Block(840,470,40,60);
    block9=new Block(880,560,40,60);

    block10=new Block(600,410,40,60);
    block11=new Block(640,410,40,60);
    block12=new Block(680,410,40,60);
    block13=new Block(720,410,40,60);
    block14=new Block(760,410,40,60);
    block15=new Block(800,410,40,60);

    block16=new Block(640,380,40,60);
    block17=new Block(680,380,40,60);
    block18=new Block(720,380,40,60);
    block19=new Block(760,380,40,60);

    block20=new Block(680,320,40,60);
    block21=new Block(720,320,40,60);

    stand = new Ground(700,550,400,10)

}
function draw(){
    background(0);
    fill("aquamarine")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    //block9.display();

    fill("pink")
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    fill("lightblue")
    block16.display();
    block17.display();
    block18.display();
    block19.display();

    fill("lightyellow")
    block20.display();
    block21.display();

    stand.display()
    drawSprites();
}