/*************************************************************************
    (*)Code Self Portrait
          (*)by Mary Huang

    (*)Overview - Self portrait recreation by using P5.js
    ---------------------------------------------------------------------
    (*)Notes: (ie: To be fixed, I Need Help With, Clarify This, etc etc: )
     (1)I want to make the code simply with out the repertion of the coordinates
**************************************************************************/

//Variation
let bgcolor = (255, 255, 255);

//Setup code goes here
function setup() {
  createCanvas(700, 700);
  ellipseMode(CENTER);
  angleMode(RADIANS);
}

//Draw code goes here
function draw() {
  background(124, 199, 255);
  print('mouseX:',mouseX, 'mouseY:', mouseY)
  for (var y = 0; y <= height; y += 50) {
    for (var x = 0; x <= width; x += 50) {
      fill(bgcolor);
      ellipse(x, y, 25, 30);
}
}
 	hair();
 	face();
  eye();
  nose();
  mouth();
  mole();
  glasses();
  body();
  changecolor();
}  

//Functions

//draw face
function face(){
	noStroke();
	//facedownpart
	fill(255, 233, 219);
	beginShape();
	vertex(182, 353);
	vertex(229, 380);
	vertex(280, 398);
	vertex(333, 407);
	vertex(386, 398);
	vertex(437, 380);
	vertex(488, 353);
	endShape();
	  
	//faceuperpart
	fill(255, 233,219);
	rect(178, 220, 306, 133);
  
  	//ear
	fill(255, 233, 219);
	ellipse(180, 325, 58, 60);
	ellipse(488, 325, 58, 60);

}

//draw hair
function hair(){
	noStroke();
	//band
	fill(72, 87, 90);
	arc(331, 220, 360, 365, -PI, 0);
	  
	//blackhair
	fill(72, 87, 90);
	rect(151, 218, 360, 250);

}

//draw eyes
function eye(){
	//brows
	stroke(99, 99, 99);
	strokeWeight(9);
	line(215, 250, 295, 250);
	line(375, 250, 455, 250);
	  
	//eyes
	stroke(99, 99, 99);
	strokeWeight(6);
	arc(255, 280, 50, 10, PI, TWO_PI,OPEN);
	arc(415, 280, 50, 10, PI, TWO_PI,OPEN);
	//eyeball
	fill(99, 99, 99);
	noStroke();
	ellipse(250, 295, 25, 40);
	ellipse(410, 295, 25, 40);
	//highlight
	stroke(255, 255,255);
	strokeWeight(8);
	point(245, 287);
	point(405, 287);
}

//draw nose
function nose(){
	noFill();
	stroke(99, 99, 99);
	strokeWeight(4);
	bezier(348, 314, 347, 312, 332, 306, 322, 314);
	bezier(322, 314, 318, 319, 318, 326, 322, 330);
	bezier(322, 330, 328, 335, 332, 337, 342, 335);
}

//draw mouth
function mouth(){
	noFill();
	stroke(99, 99, 99);
	strokeWeight(4);
	line(319, 374, 354, 374);
}

//draw mole
function mole(){
	stroke(99, 99, 80);
	strokeWeight(4);
	point(254, 374);
	stroke(99, 99, 99);
	strokeWeight(2);
	point(342, 382);
}

//draw glasses
function glasses(){
	noFill();
	stroke(0);
	strokeWeight(2);
	//left
	bezier(210, 272, 222, 268, 278, 262, 298, 276);
	bezier(210, 272, 211, 297, 224, 318, 252, 323);
	bezier(252, 323, 274, 325, 297, 302, 298, 276);

	let x=158
	//right
	bezier(210+x, 272, 222+x, 268, 278+x, 262, 298+x, 276);
	bezier(210+x, 272, 211+x, 297, 224+x, 318, 252+x, 323);
	bezier(252+x, 323, 274+x, 325, 297+x, 302, 298+x, 276);
	  
	bezier(296, 286, 318, 291, 341, 291, 370,286);
	line(178, 289, 210, 281);
	line(456, 281, 484, 289);
}

//draw body
function body(){
	//neck
	noStroke();
 	fill(255, 233, 219);
  	rect(314, 398, 50, 30);

	 //cloth
	 fill(0);
	 rect(220, 425, 240, 300, 20);
	 fill(255, 255, 255);
	 quad(314, 424, 338, 446, 320, 457, 290, 424);
	 quad(358, 424, 338, 446, 354, 457, 385, 424);
}

//change background color
function changecolor(){
 	if (mouseIsPressed){
 		bgcolor = (250, 216, 97);
  }
    else {
    	bgcolor = (255, 255, 255);
    }
}