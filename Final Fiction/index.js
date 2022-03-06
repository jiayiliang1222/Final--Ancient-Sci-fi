function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
    background(0);
}

function draw() {

    let freq = frameCount * 0.03;
    let amp = 100;
    let sinValue1 = sin(freq) * amp;
    let sinValue2 = sin(freq * 0.5) * amp;
    let coValue1 = cos(freq) * amp / 2;
    let coValue2 = cos(freq * 0.2) * amp;

    let x = frameCount % width;
    let y1 = height / 2 + sinValue1;
    let y2 = height / 2.5 + sinValue2;
    fill(150, 155, 212, 50);
    stroke(150, 155, 212, 100);
    line(x, y1, x * 1.5, y2);
    line(x, y1 * 1.2, x * 1.2, y2);
    let y = frameCount % height;
    let x1 = width / 2 + coValue1;
    let x2 = width / 2.3 + coValue2;
    line(x1, y, x2, y * 1.5);
    line(x1 * 1.2, y, x2, y * 1.2);


    let size = random(5, 30);
    let clr = random(100, 200);
    let alpha = random(30);

    noStroke();
    fill(clr, alpha);
    textSize(size);

}