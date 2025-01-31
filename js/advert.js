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

}

let ad;

function preload() {
}

function create() {
    let Ad = new Phaser.Class({
        initialize:

            function Ad(scene, x, y) {
                this.scene = scene;

                // Container dimensions
                this.containerWidth = 300;
                this.containerHeight = 250;

                // Initial position
                this.position = new Phaser.Geom.Point(x, y);

                // Randomize initial velocity (speed and direction)
                this.velocity = new Phaser.Geom.Point(
                    Phaser.Math.Between(-150, 150), // Random X velocity between -50 and 50
                    Phaser.Math.Between(-150, 150)  // Random Y velocity between -50 and 50
                );

                this.character = scene.add.group().create(x * 48, y * 48, 'character');
                this.character.setOrigin(0);

                // Adjust character size if needed (to ensure it doesn't go out of bounds due to the image size)
                this.character.displayWidth = 48; // Adjust to your graphic size
                this.character.displayHeight = 48; // Adjust to your graphic size
            },

        update: function(time, delta) {
            // Calculate new position
            this.position.x += this.velocity.x * (delta / 1000);
            this.position.y += this.velocity.y * (delta / 1000);

            // Check bounds against container width/height
            if (this.position.x <= 0 || this.position.x + this.character.displayWidth >= this.containerWidth) {
                this.velocity.x *= -1; // Reverse X direction on collision
            }

            if (this.position.y <= 0 || this.position.y + this.character.displayHeight >= this.containerHeight) {
                this.velocity.y *= -1; // Reverse Y direction on collision
            }

            // Update graphic position
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