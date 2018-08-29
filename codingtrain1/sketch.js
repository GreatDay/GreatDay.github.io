var y=0;

var eye1 = {
	x : 221,
	y : 115,
	w : 16,
	h : 32
};

var eye2 = {
	x : 259,
	y : 115,
	w : 16,
	h : 32
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100,100,5);
}

function draw() {
	//background(250,200,0);
	y=y+1;
	noStroke();
	fill(100,10,y);
	ellipse(400,50,16,32);

	ellipseMode(CENTER);
	rectMode(CENTER);

	//Body
	stroke(0,0,0);
	fill(255,0,0);
	rect(240,145,20,100);
	//Head
	fill(0,0,255);
	ellipse(240,115,60,60);
	//Eyes
	fill(0,255,0);
	ellipse(eye1.x,eye1.y,eye1.w,eye1.h);
	ellipse(eye2.x,eye2.y,eye2.w,eye2.h);
	//Legs
	line(230,195,220,205);
	line(250,195,260,205);

	noStroke();
	fill(255,255,255,50);
	ellipse(mouseX,mouseY,20,20);

	//console.log(mouseX);
}

function mousePressed() {
	background(100,100,5);
}
