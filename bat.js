class Bat {
    constructor() {
        this.batData;
        this.batImg;
        this.animationBat = [];
        this.x = 1090;
        this.y = 100;
        this.width = 60;
        this.height = 60;
        this.batHurtSound;
        this.swordSound;
        this.playerHitSound;
        this.evadeSound;
    }
    preload() {
        this.batData = loadJSON('images/bat/bat.JSON')
        this.batImg = loadImage('images/bat/Bat_Walk.png');
        this.batHurtSound = loadSound('sound/batHurt.wav');
        this.swordSound = loadSound('sound/swordStrike.mp3');
        this.playerHitSound = loadSound('sound/ow.wav');
        this.evadeSound = loadSound('sound/evade.wav');
     }
     setup() {
        this.evadeSound.setVolume(0.3);
        this.playerHitSound.setVolume(0.4);  
        this.swordSound.setVolume(0.3);
        this.batHurtSound.setVolume(0.3);
        let frames = this.batData.frames;
        for (let i = 0; i < frames.length; i++){
            let pos = frames[i].position;
            let img = this.batImg.get(pos.x, pos.y, pos.w, pos.h);
            this.animationBat.push(img);
        }
    }
    draw() {

        image(this.animationBat[frameCount % this.animationBat.length], this.x, this.y, this.width, this.height);

        //speed of the bat

        if (keyIsDown(RIGHT_ARROW)) { 
            if (this.y < 510){
                this.y = this.y + Math.random()*80;
            }
            this.x = this.x - Math.random()*140;
        } else {
            if (this.y < 510){
                this.y = this.y + Math.random()*60;
            }
            this.x = this.x - Math.random()*75;
        }

        //player collision or outside of canvas

        let obstacleX = this.x + this.width/2;
        let obstacleY = 0;
       
        let playerX = game.player.x + game.player.width/2;
        let playerY = 0;

        if(dist(obstacleX, obstacleY, playerX, playerY) < 40 && !keyIsDown(32)) {
            this.x = 1090;
            this.y = Math.random()*509;
            game.player.lives--;
            score.lives--;    
            this.playerHitSound.play();               
        } else if (dist(obstacleX, obstacleY, playerX, playerY) < 40 && keyIsDown(32) && keyIsDown(RIGHT_ARROW)) {
            this.x = 1090;
            this.y = Math.random()*509;
            game.player.lives--;
            score.lives--;  
            this.playerHitSound.play();  
        } else if (dist(obstacleX, obstacleY, playerX, playerY) < 40 && keyIsDown(32) && !keyIsDown(RIGHT_ARROW)) {
            this.x = 1090;
            this.y = Math.random()*509;
            this.batHurtSound.play();
            this.swordSound.play();
        } else if (this.x < 110) {
            this.evadeSound.play();
            this.x = 1090;
            this.y = Math.random()*509;
        }
          
    }

}