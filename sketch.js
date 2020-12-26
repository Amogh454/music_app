var gameState = "PLAY";
var bg, bgImage;
var song1, song1Sound;
var song2, song2Sound;
var song3, song3Sound;
var song4, song4Sound;
var notice, noticeImage;
var posture1, posture1Image;
var posture2, posture2Image;
var posture3, posture3Image;
var posture4, posture4Image;



function preload(){
  bgImage = loadImage("music bg'.jpg");
  noticeImage = loadImage("notice.jpeg");
  posture1Image = loadImage("posture1.jpeg");
  posture2Image = loadImage("kitaben bahut.jpg");
  posture3Image = loadImage("kali kali ankhen.jpg");
  posture4Image = loadImage("1527616864084.png");
  song1Sound = loadSound("Baazigar O Baazigar.mp3");
  song2Sound = loadSound("Kitaben Bahut Si.mp3");
  song3Sound = loadSound("Ye Kaali Kaali.mp3");
  song4Sound = loadSound("Ae Mere Humsafar.mp3");

}
function setup() {
  createCanvas(600, 400);
  
  
 bg = createSprite(200, 150, 20, 20);
  bg.addImage(bgImage);
    bg.scale = 1.9;
    bg.x=bg.width/2;
  bg.velocityX=0;
  

  
  notice = createSprite(300, 202, 20, 20);
 notice.addImage(noticeImage);
  notice.scale = 0.8;
  
  posture1 = createSprite(300, 200, 20, 20);
  posture1.addImage(posture1Image);
  posture1.scale = 0.6;
  posture1.visible = false;
  
  posture2 = createSprite(300, 200, 20, 20);
  posture2.addImage(posture2Image);
  posture2.scale = 0.4;
  posture2.visible = false;
  
  posture3 = createSprite(300, 200 , 20, 20);
  posture3.addImage(posture3Image);
  posture3.scale = 0.4;
  posture3.visible = false;
  
  posture4 = createSprite(300, 200, 20, 20);
  posture4.addImage(posture4Image);
  posture4.scale = 0.4;
  posture4.scale = false;

  
}

function draw() {
  background(220);
  
  if(gameState === "PLAY"){
    if(bg.x<100){
    bg.x=bg.width/2;
  }
  
 
  if(keyDown("1")){
      bg.velocityX  = -4;
    notice.visible = false;
    song2Sound.stop();
    song3Sound.stop();
    song4Sound.stop();
    song1Sound.play();
    posture1.visible = true;
     
     posture2.visible = false;
     posture3.visible = false;

  }
   if(keyDown("2")){
    bg.velocityX  = -4;
     song3Sound.stop();
     song4Sound.stop();
     song1Sound.stop();
    song2Sound.play();
     notice.visible = false;
     posture2.visible = true;
     posture1.visible = false;
     
  
  }
 if(keyDown("3")){
       bg.velocityX  = -4;
   song2Sound.stop();
   song1Sound.stop();
   song4Sound.stop();
    song3Sound.play();
    notice.visible = false;
     posture2.visible = false;
     posture1.visible = false;
   posture3.visible = true;
  
  }
   if(keyDown("4")){
      bg.velocityX  = -4;
      song3Sound.stop();
     song2Sound.stop();
     song1Sound.stop();
    song4Sound.play();
     
  
  }
    
  }
       if(gameState === "END"){
         
       }
  
  drawSprites();
  
  stroke("black");
  fill("white");
  textSize(20);
  text("HEADPHONES RECOMMENDED",200, 40 );

}