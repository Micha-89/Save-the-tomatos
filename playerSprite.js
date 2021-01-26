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

    }
    draw() {
  
}