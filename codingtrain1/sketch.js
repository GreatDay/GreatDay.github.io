var runcolour = {
	r : 0,
	g : 0,
	b : 0
};

var paint = {
	r : 0,
	g : 0,
	b : 0
};

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
	mouseX=240;
	mouseY=115;
	background(0);
}

function draw() {
	//background(250,200,0);
	ellipseMode(CENTER);
	rectMode(CENTER);

	runcolour.r=random(0,255);
	runcolour.g=random(0,255);
	runcolour.b=runcolour.b+1;
	noStroke();
	fill(runcolour.r,runcolour.g,runcolour.b);
	rect(500,115,50,50);

	stroke(255,255,255);
	//Body
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

	paint.r = map(mouseX,0,width,0,255);
	paint.g = map(mouseY,0,height,255,0); // can be inverted
	paint.b = 255-paint.r; // my way to invert
	//text(col2,10,10);
	noStroke();
	fill(paint.r,paint.g,paint.b,50);
	ellipse(mouseX,mouseY,20,20);

	//console.log(mouseX);
}

function mousePressed() {
	// background(100,100,5);
	background(0);
}
