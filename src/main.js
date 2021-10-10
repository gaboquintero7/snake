import Bootloader from './bootloader.js';
import Play from './scenes/play.js';
import Gameover from './scenes/gameover.js';
import UI from './scenes/UI.js';
import Menu from './scenes/menu.js';
import Name from './scenes/name.js';

const config = {
    title: 'Snake',
    width: 320,
    height: 180,
    type: Phaser.AUTO,
    parent: 'container',
    backgroundColor: '#64541d',
    pixelArt: true,
    dom:{
        createContainer: true
      },
    physics: {
        default: "arcade",
        // arcade: {
        //     gravity: { y: 100 }
        // }
    },
    scene: [Bootloader, Play, Gameover, UI, Menu, Name]
};

new Phaser.Game(config);