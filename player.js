class Player {
    constructor() {
        this.lives = 3;
        this.score = 0;
        this.charIdleData;
        this.charIdleImg;
        this.charData;
        this.charRunImg;
        this.charAttackImg;
        this.charJumpImg;
        this.charHurt;
        this.charDeath;
        this.animationRun = [];
        this.animationIdle = [];
        this.animationAttack = [];
        this.animationJump = [];
        this.animationDeath = [];
        this.x = 10;
        this.y = 648 - 200;
        this.width = 200;
        this.height = 200;
    }
    preload() {
       this.charIdleData = loadJSON('images/character/charIdle.json')
       this.charIdleImg = loadImage('images/character/GraveRobber_idle.png');
       this.charData = loadJSON('images/character/char.json');
       this.charRunImg = loadImage('images/character/GraveRobber_run.png');
       this.charAttackImg = loadImage('images/character/GraveRobber_attack1.png');
       this.charJumpImg = loadImage('images/character/GraveRobber_jump.png');
       this.charHurt = loadImage('images/character/GraveRobber_hurt.png');
       this.charDeath = loadImage('images/character/GraveRobber_death.png');
    }
    setup() {
        let frames = this.charData.frames;
        for (let i = 0; i < frames.length; i++){
            let pos = frames[i].position;
            let img = this.charRunImg.get(pos.x, pos.y, pos.w, pos.h);
            this.animationRun.push(img);
        }
        for (let i = 0; i < frames.length; i++){
            let pos = frames[i].position;
            let img = this.charDeath.get(pos.x, pos.y, pos.w, pos.h);
            this.animationDeath.push(img);
        }
        let framesIdle = this.charIdleData.frames;
        for (let i = 0; i < framesIdle.length; i++){
            let pos = framesIdle[i].position;
            let img = this.charIdleImg.get(pos.x, pos.y, pos.w, pos.h);
            this.animationIdle.push(img);
        }
        for (let i = 0; i < frames.length; i++){
            let pos = frames[i].position;
            let img = this.charAttackImg.get(pos.x, pos.y, pos.w, pos.h);
            this.animationAttack.push(img);
        }
        for (let i = 0; i < frames.length; i++){
            let pos = frames[i].position;
            let img = this.charJumpImg.get(pos.x, pos.y, pos.w, pos.h);
            this.animationJump.push(img);
        }
    }
    draw() {
        if (keyIsDown(RIGHT_ARROW)) {      
            if (this.lives < 1) {
                image(this.animationDeath[frameCount % this.animationDeath.length], this.x, this.y, 200, 200);
                frameRate(0);
            } else {
                image(this.animationRun[frameCount % this.animationRun.length], this.x, this.y, 200, 200);
            }
        } else if (keyIsDown(32)) {
            if (this.lives < 1) {
                image(this.animationDeath[frameCount % this.animationDeath.length], this.x, this.y, 200, 200);
                frameRate(0);
            } else {
                image(this.animationAttack[frameCount % this.animationAttack.length], this.x, this.y, 200, 200);
            }
        } else {
            if (this.lives < 1) {
                image(this.animationDeath[frameCount % this.animationDeath.length], this.x, this.y, 200, 200);
                frameRate(0);
            } else {
                image(this.animationIdle[frameCount % this.animationIdle.length], this.x, this.y, 200, 200);
            }
        }
    }
      
}