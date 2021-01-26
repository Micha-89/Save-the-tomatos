const game = new Game();
const score = new Score();

document.querySelector('#start button').addEventListener('click', function(){
     document.querySelector('#start').style.visibility = 'hidden';
});

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
    frameRate(0);
    document.querySelector('#start button').addEventListener('click', function(){
        frameRate(15);
    });
    game.setup();
}

function draw() {
    game.draw();
    score.draw();
}

