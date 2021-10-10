
class Name extends Phaser.Scene {
    constructor() {
        super('Name');
    }

    that = this;

    preload() {
        console.log('Soy Name');
        let element = document.getElementById("overlayName");
        element.classList.add("activeOverlay");
    }

    create() {
        let that = this;
        let element = document.getElementById("overlayName");


        function myClickEvent() {
            localStorage.setItem('nivel', document.getElementById("nivel").value);
            localStorage.setItem('nombre', document.getElementById("nombre").value);
            element.classList.remove("activeOverlay");;
            that.scene.start('Play');
        }

        this.betButton = document.getElementById('avanzar');
        this.betButton.addEventListener('click', myClickEvent  , false);
        this.input.on('pointerdown', () => {
            this.scene.start('Play');
        })
    }


}

export default Name;