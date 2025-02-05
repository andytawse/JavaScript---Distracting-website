/**
 * A Phaser Scene that controls the advert animation.
 *
 * Scenes consist of lifecycle functions and this class is passed to the
 * Game object.
 */
class Ad extends Phaser.Scene {

    constructor() {
        super('Ad');

        // Container dimensions
        this.containerWidth = 300;
        this.containerHeight = 250;

        this.character = null;
        this.position = null;
        this.velocity = null;
    };

    /**
     * Lifecycle function used to create the game objects.
     *
     * In this case, the character that is animated in the advert.
     */
    create() {
        this.position = new Phaser.Geom.Point(
            Phaser.Math.Between(0, this.containerWidth - 48),
            Phaser.Math.Between(0, this.containerHeight - 48)
        );

        // Randomize initial velocity.
        this.velocity = new Phaser.Geom.Point(
            Phaser.Math.Between(-150, 150),
            Phaser.Math.Between(-150, 150)
        );

        // Create the moving character sprite.
        this.character = this.add.sprite(
            this.position.x,
            this.position.y,
            'character'
        );
        this.character.setOrigin(0);
        this.character.displayWidth = 48;
        this.character.displayHeight = 48;
    }

    /**
     * Lifecycle function called once per game step.
     *
     * Here we move the animated character and keep it within the bounds
     * of the box.
     *
     * @param {number} time
     * @param {number} delta
     */
    update(time, delta) {
        // Calculate new position of the sprite.
        this.position.x += this.velocity.x * (delta / 1000);
        this.position.y += this.velocity.y * (delta / 1000);

        // Check bounds against container width and height.
        if (this.position.x <= 0 || this.position.x + this.character.displayWidth >= this.containerWidth) {
            this.velocity.x *= -1; // Reverse X direction on collision
        }

        if (this.position.y <= 0 || this.position.y + this.character.displayHeight >= this.containerHeight) {
            this.velocity.y *= -1; // Reverse Y direction on collision
        }

        // Update sprite position.
        this.character.setX(this.position.x);
        this.character.setY(this.position.y);
    }
}

export { Ad };