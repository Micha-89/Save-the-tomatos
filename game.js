class Game {
    constructor(){
        this.backgroundImages;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('images/background/8.png'), x: 0, speed: 0 },
            { src: loadImage('images/background/7.png'), x: 0, speed: 1 },
            { src: loadImage('images/background/6.png'), x: 0, speed: 2 },
            { src: loadImage('images/background/5.png'), x: 0, speed: 3 },
            { src: loadImage('images/background/4.png'), x: 0, speed: 4 },
            { src: loadImage('images/background/3.png'), x: 0, speed: 5 },
            { src: loadImage('images/background/2.png'), x: 0, speed: 6 },
            { src: loadImage('images/background/1.png'), x: 0, speed: 9 }
        ];
        
    }
    draw() {
        clear();
        this.background.drawMove();
    }


}