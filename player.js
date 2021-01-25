class Player {
    constructor() {
        this.lives = 3;
        this.score = 0;
        this.charRunData;
        this.charRunImg;
        this.animation = [];
        //this.width = 650;
        //this.height = 240;
        //this.x = 50;
        //this.y = height - this.height;
    }
    preload() {
       this.charRunData = loadJSON('images/character/char.json');
       this.charRunImg = loadImage('images/character/GraveRobber_run.png');
    }
    setup() {
        let frames = this.charRunData.frames;
        for (let i = 0; i < frames.length; i++){
        let pos = frames[i].position;
        let img = this.charRunImg.get(pos.x, pos.y, pos.w, pos.h);
        this.animation.push(img);
        }
    }
    draw() {
        image(this.animation[frameCount % this.animation.length], 0, height - 192, 192, 192);
    }
}