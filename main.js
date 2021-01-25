const game = new Game();

let charRunData;
let charRunImg;
let animation = [];
let index = 0;

function preload() {    
    game.preload();
    charRunData = loadJSON('images/character/char.json');
    charRunImg = loadImage('images/character/GraveRobber_run.png');
}

function setup(){
    createCanvas(1152, 648);
    frameRate(14);
    game.setup();

    let frames = charRunData.frames;
    for (let i = 0; i < frames.length; i++){
        let pos = frames[i].position;
        let img = charRunImg.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }
}

function draw() {
    game.draw();
    image(animation[frameCount % animation.length], 0, height - 192, 192, 192);
}

function keyPressed() {
   
}