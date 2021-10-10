class UI extends Phaser.Scene {
    constructor() {
        super('UI');
    }

    preload() {
        console.log('Soy UI');
    }
    
    create() {
        let nivel = localStorage.getItem('nivel')
        let nombre = localStorage.getItem('nombre')
        this.add.image(0, 0, 'tablero').setOrigin(0);
        this.add.dynamicBitmapText(10, 7, 'pixel', `NOMBRE ${nombre}`, 8);
        this.add.dynamicBitmapText(170, 7, 'pixel', `NIVEL ${nivel}`, 8);
        this.puntos = this.add.dynamicBitmapText(this.sys.game.config.width - 60, 7, 'pixel', Phaser.Utils.String.Pad(0, 6, 0, 1), 8);
    }
    addPoint() {
        this.puntos.setText(
            Phaser.Utils.String.Pad(parseInt(this.puntos.text) + 10, 6, 0, 1)
        );
    }

}

export default UI;