var y=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250,200,0);
}

function draw() {
	//background(250,200,0);
	y=y+1;
	noStroke();
	fill(100,y,10);
	ellipse(400,50,16,32);

	ellipseMode(CENTER);
	rectMode(CENTER);

	//Body
	fill(255,0,0);
	rect(240,145,20,100);
	//Head
	fill(0,0,255);
	ellipse(240,115,60,60);
	//Eyes
	fill(0,255,0);
	ellipse(221,115,16,32);
	ellipse(259,115,16,32);
	//Legs
	line(230,195,220,205);
	line(250,195,260,205);

	noStroke();
	fill(255,255,255,50);
	ellipse(mouseX,mouseY,20,20);

	//console.log(mouseX);
}

function mousePressed() {
	background(250,200,0);
}
