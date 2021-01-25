const game = new Game();

let index = 0;

function preload() {    
    game.preload();
}

function setup(){
    createCanvas(1152, 648);
    frameRate(14);
    game.setup();
}

function draw() {
    game.draw();
}
