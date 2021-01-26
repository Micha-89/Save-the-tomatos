const game = new Game();
const score = new Score() ;
let myFont, fontReady = false;

let index = 0;

function fontRead(){
    fontReady = true;
}


function preload() {    
    game.preload();
    myFont = loadFont('/font/Planes_ValMore.ttf', fontRead);
}

function setup(){
    createCanvas(1152, 648);
    frameRate(13);
    game.setup();
    score.setup();
}

function draw() {
    game.draw();
    score.draw();
}

