var circle = {
	x : 0,
	y : 0,
	diameter : 0
};

var colour = {
	r : 0,
	g : 0,
	b : 0
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	// Thanks to The Coding Train
	//https://www.youtube.com/watch?v=nfmV2kuQKwA&index=10&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

	colour.r = random(90,255);
	colour.g = 90;
	colour.b = random(10,50);

	circle.x = random(0, width);
	circle.y = random(0, height);
	circle.diameter = random(0, 50);

	noStroke();
	fill(colour.r,colour.g,colour.b,100);
	ellipse(circle.x,circle.y,circle.diameter,circle.diameter);

}
