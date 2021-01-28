const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var umbrella;
var drops=[];
var thunder,thunder1,thunder2,thunder3,thunder4,thunderGroup;
var maxDrops=100;

function preload(){
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");
    thunderGroup=new Group();
}

function setup(){
    createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    
    umbrella=new Umbrella(200,400);
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,600), random(0,600)));
    }

    if(frameCount%100===0){
        thunder=createSprite(random(0,600), 50, 100, 100);
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3:thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;
        }
        thunder.scale=random(0.2,0.5);
        thunderGroup.add(thunder);
    }

    Engine.run(engine);
}

function draw(){
    background(0);
    Engine.update(engine);

    umbrella.display();

    // Display the drops
    for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
    }
   

    drawSprites();
}   

