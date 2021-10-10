import Snake from '../gameobjects/Snake.js';
import Comida from '../gameobjects/Comida.js';

class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }

    preload() {
        console.log('Escena play');
        this.snake = new Snake(this);
        this.comida = new Comida(this);
        this.load.image('background','https://thumbs.dreamstime.com/b/modelo-de-tierra-pixel-art-illustration-67039967.jpg')
    }
    create() {
        this.scene.launch('UI');
        const sceneUI = this.scene.get('UI');

        this.input.keyboard.on('keydown_RIGHT', () => {
            this.snake.changeMov('derecha');
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            this.snake.changeMov('izquierda');
        });
        this.input.keyboard.on('keydown_UP', () => {
            this.snake.changeMov('arriba');
        });
        this.input.keyboard.on('keydown_DOWN', () => {
            this.snake.changeMov('abajo');
        });

        // Colision de cabeza con comida
        this.physics.add.collider(this.snake.cuerpo[0], this.comida.comida, () => {
            this.comida.crearComida();
            this.snake.crece();
            sceneUI.addPoint();
        });
    }
    update(time) {
        this.snake.update(time);
    }
}

export default Play;