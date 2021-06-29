var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImage=loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	fairy=createSprite(100, 650, 30, 30);
	fairy.addAnimation("fairyAnimation", fairyImage);
	fairy.scale=0.15;
	

	invisibleBarrierR=createSprite(750, 700, 10, 100);
	invisibleBarrierR.visible=false;

	invisibleBarrierD=createSprite(640, 670, 100, 10);
	invisibleBarrierD.visible=false;

	invisibleBarrierL=createSprite(0, 700, 10, 100);
	invisibleBarrierL.visible=false;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);


  fairy.collide(invisibleBarrierR);
  star.collide(invisibleBarrierD);
  fairy.collide(invisibleBarrierL);
 
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.y >470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  keyPressed();
  drawSprites();

}

function keyPressed() {


	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 10;
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 10;
	}
}

