//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Only for debugging code, is this needed, not otherwise
 const Render = Matter.Render;

var myengine,myworld;
var ground, box1, box2; 

function setup(){
    var canvas = createCanvas(400,400);
   
    myengine = Engine.create();
    myworld = myengine.world;

    
box1 = new Box(200,300,50,50)
box2 = new Box(240,100,50,100)
ground = new Ground(200,height,400,20)


    

    // Only for debugging code, is this needed, not otherwise
    // var render = Render.create({
    //   element: document.body,
    //   engine: myengine,
    //   options: {
    //     width: 1600,
    //     height: 700,
    //     wireframes: false
    //   }
    // });
    // Render.run(render);

    //console.log(ball);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);

    box1.display()
    box2.display()
    ground.display()
    
}
