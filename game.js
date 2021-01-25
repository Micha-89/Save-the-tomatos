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
            { src: loadImage('images/background/8.png'), x: 0, speed: 5 },
            { src: loadImage('images/background/7.png'), x: 0, speed: 6 },
            { src: loadImage('images/background/6.png'), x: 0, speed: 7 },
            { src: loadImage('images/background/5.png'), x: 0, speed: 8 },
            { src: loadImage('images/background/4.png'), x: 0, speed: 9 },
            { src: loadImage('images/background/3.png'), x: 0, speed: 10 },
            { src: loadImage('images/background/2.png'), x: 0, speed: 11 },
            { src: loadImage('images/background/1.png'), x: 0, speed: 12 }
        ];
        
    }
    draw() {
        clear();
        this.background.drawMove();
    }


}