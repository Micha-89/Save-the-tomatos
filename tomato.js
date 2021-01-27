class Tomato {
    constructor(image,x){
       this.image;
       this.y = 648 - 30;
       this.wh = 30;
       this.x = x;
       this.image = image;

    }
    collision(playerInfo) {
        let obstacleX = this.x + this.wh / 2;
        let obstacleY = 648;
       
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = 648;
        
        if (dist(obstacleX, obstacleY, playerX, playerY) > 20) {
            return false
        } else {
            game.player.score += 1;
            score.score += 1;
            console.log(game.player.score)
            game.tomatoSound.play();
            return true
        }

    }
    draw() {
      image(this.image, this.x, this.y, this.wh, this.wh);
      if (keyIsDown(RIGHT_ARROW)) { 
            this.x -= 21;
    } 
    }
}