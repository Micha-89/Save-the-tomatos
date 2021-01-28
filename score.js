class Score {
    constructor(){
        this.lives;
        this.neededScore;
        this.score = 0;
        this.timer;
        this.deathSound;
        this.winSound;
        this.timeUpSound;
    }
    preload() {
        soundFormats('wav');
        this.deathSound = loadSound('sound/playerDied.wav');
        this.winSound = loadSound('sound/win.wav');
        this.timeUpSound = loadSound('sound/timeUp.wav');
    }
    setup() {
        this.deathSound.setVolume(0.4);
        this.winSound.setVolume(0.4);
        this.timeUpSound.setVolume(0.4);
    } 

    draw(){
        textFont(myFont);
        textSize(32);
        fill(255,215,0);
        text(`Lives: ${this.lives}`, 10, 30);
        text(`Score: ${this.score}`, 10, 60);
        text(`Timer: ${this.timer}`, 10, 90);

        if (this.lives < 1) {
            textFont(myFont);
            textSize(100);
            fill(255,215,0);
            game.bat.playerHitSound.stop();
            backgroundMusic.stop();
            this.deathSound.play();
            text('YOU DIED!!!', 300, 400);
        }

        if (this.timer < 1 && this.lives > 0) {
            textFont(myFont);
            textSize(100);
            fill(255,215,0);
            backgroundMusic.stop();
            this.timeUpSound.play();
            text('TIME UP!!!', 300, 400);
            frameRate(0);
        }

        if (this.timer > 0 && this.lives > 0 && this.score > this.neededScore-1 ) {
            textFont(myFont);
            textSize(100);
            fill(255,215,0);
            if(frameCount%10==0){
                backgroundMusic.stop();
                this.winSound.play();
                text('YOU WON!!!', 300, 400);
                frameRate(0);
            }
        }

        if (frameCount % 60 == 0) {
            this.timer--;
        }
    }
}