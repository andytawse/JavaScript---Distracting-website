function init() {
    console.log(document.readyState);
    if (document.readyState === 'complete') {
        animationSetup();
    }
    else {
        document.addEventListener('readystatechange', init);
    }
}

function animationSetup() {
    let config = {
        type: Phaser.WEBGL,
        width: 300,
        height: 250,
        backgroundColor: '#FFFF00',
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    let game = new Phaser.Game(config);

    console.log('game created');

}

let ad;

function preload() {
}

function create() {
    let Ad = new Phaser.Class({
        initialize:

            function Ad(scene, x, y) {
                this.position = new Phaser.Geom.Point(x, y);
                this.velocity = new Phaser.Geom.Point(50, 50); // Speed in pixels per second
                this.character = scene.add.group().create(x * 48, y * 48, 'character');
                this.character.setOrigin(0);
            },

        update: function(time, delta) {
            // Translate position using velocity and time elapsed
            this.position.x += this.velocity.x * (delta / 1000); // Convert delta ms to seconds
            this.position.y += this.velocity.y * (delta / 1000);

            // Update the graphic's position
            this.character.setX(this.position.x);
            this.character.setY(this.position.y);
        }
    });

    ad = new Ad(this, 0, 0);
}

function update(time, delta) {
    ad.update(time, delta);
}

export { init };