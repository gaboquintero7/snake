class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    preload() {
        console.log('Soy Menu');
    }

    create() {
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2 - 50, 'logo').setScale(.1);
        this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height/2
            , 'pixel', 'LA COBRA', 16).setOrigin(0.5);

        const pressButton = this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height - 40
            , 'pixel', 'PRESIONA UNA TECLA', 8).setOrigin(0.5);
    
        this.tweens.add({
            targets: pressButton,
            alpha: 0,
            ease: (x) => x < 0.5 ? 0 : 1,
            duration: 500,
            yoyo: true,
            repeat: -1
        });
        this.input.keyboard.on('keydown_RIGHT', () => {
            this.scene.start('Name');
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            this.scene.start('Name');
        });
        this.input.keyboard.on('keydown_UP', () => {
            this.scene.start('Name');
        });
        this.input.keyboard.on('keydown_DOWN', () => {
            this.scene.start('Name');
        });

        this.input.keyboard.on('keydown_ENTER', () => {
            this.scene.start('Name');
        });
        this.input.on('pointerdown', () => {
            this.scene.start('Name');
        })

    }

}

export default Menu;