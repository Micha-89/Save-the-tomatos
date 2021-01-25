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
        let obstacleY = 0;
       
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = 0;
        
        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            return false
        } else {
            game.player.score += 1;
            console.log(game.player.score)
            return true
        }

    }
    draw() {
      image(this.image, this.x, this.y, this.wh, this.wh);
      if (keyIsDown(RIGHT_ARROW)) { 
            this.x -= 12;
    } 
    }
}