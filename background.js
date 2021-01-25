class Background {
    constructor() {
        this.backgroundImages;
    }
    preload() {
        this.backgroundImages = [
            { src: loadImage('images/background/8.png'), x: 0, speed: 7 },
            { src: loadImage('images/background/7.png'), x: 0, speed: 9 },
            { src: loadImage('images/background/6.png'), x: 0, speed: 11 },
            { src: loadImage('images/background/5.png'), x: 0, speed: 13 },
            { src: loadImage('images/background/4.png'), x: 0, speed: 15 },
            { src: loadImage('images/background/3.png'), x: 0, speed: 17 },
            { src: loadImage('images/background/2.png'), x: 0, speed: 19 },
            { src: loadImage('images/background/1.png'), x: 0, speed: 21 }
        ];  
    }
    draw() {
        this.backgroundImages.forEach(function (img) {
            image(img.src, img.x, 0, width, height);
            image(img.src, img.x + width, 0, width, height);
            if (img.x <= - width) {
                img.x = 0;
            }
        })
        if (keyIsDown(RIGHT_ARROW)) { 
            this.backgroundImages.forEach(function (img) {
                img.x -= img.speed;
            })
        } 
    }
}