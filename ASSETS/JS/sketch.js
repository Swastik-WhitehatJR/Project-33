const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var world;
var engine;
var canvas;
var mouse_Constraint;
var bg;
var snow = [];
var characters,characters_img;
var snowman,snowman_img;

function preload() {
  bg = loadImage("ASSETS/IMAGES/background/morning/bg2.jpg");
  characters_img = loadImage("ASSETS/IMAGES/characters/charcter-set1.png");
  snowman_img = loadImage("ASSETS/IMAGES/characters/snowman.png");
}


function setup() {
  canvas = createCanvas(1500, 800);

  characters = createSprite(500,500, 100, 100);
  characters.addImage("characters", characters_img);

  snowman = createSprite(1200,500, 200, 200);
  snowman.addImage("snowman", snowman_img);
  snowman.scale = 0.17;

  engine = Engine.create();
  world = engine.world;

}


function draw() {
  
  background(bg);

  Engine.update(engine);

  characters.depth = characters.depth - 100;


  if (frameCount % 30 === 0) {
    snow.push(new Snow(random(1000 / 2 - 350, 1000 / 2 + 350), -10, 10));
  }

  for (var i = 0; i < snow.length; i++) {

    snow[i].display();
  }

  drawSprites();
}