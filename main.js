const game = new Game();
const score = new Score();
let frameCountTracker = 0;
let backgroundMusic;

document.querySelector('#start img').addEventListener('click', function(){
    score.lives = livesRange.value;
    game.player.lives = livesRange.value;
    score.timer = timerRange.value;
    score.neededScore = tomatosRange.value;
    if (batRange.value == 1) {
        game.bat.ySpeedFast = 40;
        game.bat.xSpeedFast = 80;
        game.bat.ySpeed = 20;
        game.bat.xSpeed = 40;
    } else if (batRange.value == 2) {
        game.bat.ySpeedFast = 90;
        game.bat.xSpeedFast = 140;
        game.bat.ySpeed = 50;
        game.bat.xSpeed = 70;
    } else if (batRange.value == 3) {
        game.bat.ySpeedFast = 90;
        game.bat.xSpeedFast = 190;
        game.bat.ySpeed = 80;
        game.bat.xSpeed = 120;
    }
    document.querySelector('#start').style.visibility = 'hidden';
    document.querySelector('body').style.cursor = 'none';
    backgroundMusic.loop();
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
   
}

function draw() {
    game.draw();
    score.draw();
}

