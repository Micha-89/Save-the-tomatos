const game = new Game();
const score = new Score();
let frameCountTracker = 0;
let backgroundMusic;

document.querySelector('#start img').addEventListener('click', function(){
     document.querySelector('#start').style.visibility = 'hidden';
     document.querySelector('body').style.cursor = 'none';
});

document.addEventListener('keyup', function(e){
    if(e.keyCode == 13)
    window.location.reload();

})

let myFont, fontReady = false;

let index = 0;

function fontRead(){
    fontReady = true;
}


function preload() {    
    game.preload();
    score.preload();
    myFont = loadFont('/font/Planes_ValMore.ttf', fontRead);
    backgroundMusic = loadSound('sound/mixkit-epical-drums-04-679.mp3');
}

function setup(){
    createCanvas(1152, 648);
    frameRate(0);
    document.querySelector('#start img').addEventListener('click', function(){
        frameRate(22);
    });
    game.setup();
    score.setup();
    backgroundMusic.setVolume(0.2);
    backgroundMusic.loop();
}

function draw() {
    game.draw();
    score.draw();
}

