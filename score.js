class Score {
    constructor(){
        this.lives = 3;
        this.score = 0;
    }
    setup(){
            
    }
    draw(){
        textFont(myFont);
        textSize(32);
        fill(255,215,0);
        text(`Lives: ${this.lives}`, 10, 30);
        text(`Score: ${this.score}`, 10, 60);

        if (this.lives < 1) {
            textFont(myFont);
            textSize(100);
            fill(255,215,0);
            text('YOU DIED!!!', 300, 400);
        }
      
    }
}