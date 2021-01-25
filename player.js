class Player {
    constructor() {
        this.lives = 3;
        this.score = 0;
        this.charIdleData;
        this.charIdleImg;
        this.charRunData;
        this.charRunImg;
        this.animationRun = [];
        this.animationIdle = [];
        this.x = 0;
    }
    preload() {
       this.charIdleData = loadJSON('images/character/charIdle.json')
       this.charIdleImg = loadImage('images/character/GraveRobber_idle.png');
       this.charRunData = loadJSON('images/character/char.json');
       this.charRunImg = loadImage('images/character/GraveRobber_run.png');
    }
    setup() {
        let framesRun = this.charRunData.frames;
        for (let i = 0; i < framesRun.length; i++){
            let pos = framesRun[i].position;
            let img = this.charRunImg.get(pos.x, pos.y, pos.w, pos.h);
            this.animationRun.push(img);
        }
        let framesIdle = this.charIdleData.frames;
        for (let i = 0; i < framesIdle.length; i++){
            let pos = framesIdle[i].position;
            let img = this.charIdleImg.get(pos.x, pos.y, pos.w, pos.h);
            this.animationIdle.push(img);
        }
    }
    draw() {
        
        if (keyIsDown(RIGHT_ARROW)) { 
            image(this.animationRun[frameCount % this.animationRun.length], this.x, height - 200, 200, 200);
            this.x += 10; 
        } else {
            image(this.animationIdle[frameCount % this.animationIdle.length], this.x, height - 200, 200, 200);
        }
    }
   
}