var paquito;
var paquito_running;
var backgroundImg;

function preload(){
    backgroundImg = loadAnimation("cueva1.jpg","cueva2.jpg","cueva3.jpg","cueva4.jpg","cueva5.jpg","cueva6.jpg");
    paquito_running = loadAnimation("perro1.png","perro2.png","perro3.png","perro4.png","perro5.png","perro6.png");
}

function setup(){
    createCanvas(600,600);
    backgroundImg.addAnimation(backgroundImg);
    paquito = createSprite(100,400);
    paquito.addAnimation("running",paquito_running);
    paquito.scale = 0.25;
}

function draw(){
    background(backgroundImg);
    drawSprites();
}