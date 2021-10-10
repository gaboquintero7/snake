class Gameover extends Phaser.Scene {
    constructor() {
        super('Gameover');
    }

    preload() {
        console.log('Soy Gameover');
    }
    create() {
        var that = this;

        this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height/2 - 45, 'pixel', 'GAMEOVER', 20).setOrigin(0.5);
        this.add.dynamicBitmapText(50, 70, 'pixel', 'LOS PUTOS AMOS', 8);

        this.readTextFile("src/winners.json", function(text){
           let listPlayers = JSON.parse(text);
           let punto = '.';
           listPlayers = listPlayers.players.sort(((a, b) => b.points - a.points));
           listPlayers.length > 5 ? listPlayers.splice(5, listPlayers.length - 5) : listPlayers.length;
           listPlayers.map(a => a.name.length >= 10 ? a.name = a.name.substring(0,10) : a.name = a.name+ punto.repeat(10-a.name.length))
           console.log(listPlayers);
           let i = 1, topPlayers = 95;
           listPlayers.forEach(element => {
                that.add.dynamicBitmapText(50, topPlayers, 'pixel', `${i}  ${element.name}.... ${element.points}`, 8);
                topPlayers += 15;
                i++;
           });
        });

            this.input.on('pointerdown', () => {
            this.scene.start('Play');
        })
    }

    readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    salirEscene() {
        clearTimeout(this.evento);
        this.scene.start('Menu');
    }

}

export default Gameover;