/**
 * Shows a distracting advert in the RH column.
 */

/**
 * Wait for the page and all it's resources to load before
 * initialising the advert animation.
 */
function init() {
    if (document.readyState === 'complete') {
        animationSetup();
    }
    else {
        document.addEventListener('readystatechange', init);
    }
}

/**
 * Start the advert animation.
 */
function animationSetup() {
    let adScene;
    // Load the Phaser Scene class and then initialise the Phaser Game.
    import('./scenes/ad.js').then((adClassFile) => {
        adScene = new adClassFile.Ad();

        let config = {
            type: Phaser.WEBGL,
            width: 300,
            height: 250,
            backgroundColor: '#FFFF00',
            parent: 'ad-mpu',
            scene: adScene
        };

        let game = new Phaser.Game(config);
    });
}

export default init;