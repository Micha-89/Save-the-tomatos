class Game {
    constructor(){
        this.player = new Player();
        this.background = new Background();
        this.bat = new Bat();
        this.tomatoImg;
        this.tomatos;
        this.tomatoSound;
        
    }
    preload() {
        this.background.preload();
        this.player.preload();
        this.tomatoImg = loadImage('images/tomato/Tomato.png');
        this.bat.preload();
        this.tomatoSound = loadSound('sound/tomato.wav');
    }
    setup() {   
        this.player.setup();
        this.tomatos = [];
        this.bat.setup();
        this.tomatoSound.setVolume(0.4);
    }
    draw() {
        clear();
        this.background.draw();
        this.tomatos.forEach(function (tomato) {
            tomato.draw()
        })
        this.player.draw();
        this.bat.draw();

        if (frameCount % 100 === 0) {
            for (let i = 1182; this.tomatos.length < 6; i = i + ((Math.random()*1182))){
                this.tomatos.push(new Tomato(this.tomatoImg,i));
            }
        }

       

        this.tomatos = this.tomatos.filter((tomato) => {
            if (tomato.collision(this.player)) {
                return false
            } else {
                return true
            }

        })

    }


}