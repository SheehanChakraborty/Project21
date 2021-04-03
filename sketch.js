var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  bullet=createSprite(50, 20, 50, 10);
  wall=createSprite(1200,200,thickness,height/2);

  speed=random(223,321);
  weight=random(30,20);

  bullet.velocityX=speed;
}

function draw() {
  background("white");  

if (wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0
var deformation=0.5*weight*speed*speed/22509;

if (deformation>180){
  bullet.shapeColor="grey"

}
if (deformation<180 && deformation>100){
  bullet.shapeColor="blue"
  }
  if (deformation<100){
    bullet.shapeColor="grey"
  
  }
}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}


