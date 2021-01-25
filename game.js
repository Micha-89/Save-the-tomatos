class Game {
    constructor(){
        this.player = new Player();
        this.background = new Background();
    }

    setup() {   
        this.player.setup();
    }

    preload() {
        this.background.preload();
        this.player.preload();
    }
    draw() {
        clear();
        this.background.drawMove();
        this.player.draw();
    }


}