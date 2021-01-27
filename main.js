const game = new Game();
const score = new Score();
let frameCountTracker = 0;


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
}

function setup(){
    createCanvas(1152, 648);
    frameRate(0);
    document.querySelector('#start img').addEventListener('click', function(){
        frameRate(18);
    });
    game.setup();
    score.setup();
    
}

function draw() {
    game.draw();
    score.draw();
}

