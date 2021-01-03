var canvas, backgroundImage;

var gameState = "start"

var name;
var form, backgroundImage;

var space, spaceImg, harry, harryImg, enemy1, enemy2;

var fire,fireImg;

var score=0;



function preload(){
  backgroundImage = loadImage("images/background.png")
  spaceImg = loadImage("images/space.png")
  harryImg = loadImage("images/harry.png")
  fireImg = loadImage("images/ball.png")
  
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  space=createSprite(width/2, height/2)
  space.addImage(spaceImg)
 
  space.y=400
  console.log(space.y)
  console.log(displayHeight-30)
    

  harry = createSprite(width/2, height - 200)
  harry.addImage(harryImg)
  harry.scale = 0.7

  fire = createSprite(harry.x,harry.y)
  fire.visible = false
  fire.addImage(fireImg)
  fire.scale = 0.15
  
  textSize(20)
  fill("yellow")
 
  form = new Form();
  
  
}


function draw(){
  
  if(gameState === "start"){
    form.display();
    
  }

  if(gameState==="play"){
    harry.x=mouseX;
    space.velocityY=6;

    if(space.y>540){
      space.y=400
    }

    if(keyDown("space")){
      fire.x = harry.x - 30
      fire.y = harry.y
      fire.visible = true
      fire.velocityY = -4
      

    }
   
    drawSprites();

    text(name + " score "+score,displayWidth-300,40)
    text("Press space to shoot",40,40)
  }
  
}
