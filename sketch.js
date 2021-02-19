
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var rain;

function preload(){
    
}

function setup(){
   createCanvas();
   engine = Engine.create();
   world = engine.world;
    
}

function draw(){
    
    raindrop();
}   
function raindrop(){
    var maxDrops=100;
    for (var i = 0; i < maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
    
}

