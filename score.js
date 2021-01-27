class Score {
    constructor(){
        this.lives = 3;
        this.score = 0;
        this.timer = 10;
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
            text('YOU DIED!!!', 300, 400);
        }

        if (this.timer < 1 && this.lives > 0) {
            textFont(myFont);
            textSize(100);
            fill(255,215,0);
            text('TIME UP!!!', 300, 400);
            frameRate(0);
        }

        if (this.timer > 0 && this.lives > 0 && this.score > 4 ) {
            textFont(myFont);
            textSize(100);
            fill(255,215,0);
            if(frameCount%10==0){
                text('YOU WON!!!', 300, 400);
                frameRate(0);
            }
        }

        if (frameCount % 60 == 0) {
            this.timer--;
        }
    }
}