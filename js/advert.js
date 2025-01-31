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
        width: 640,
        height: 480,
        backgroundColor: '#bfcc00',
        parent: 'phaser-example',
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    let game = new Phaser.Game(config);

    console.log('game created');

}


function preload() {
}

function create() {
}

function update() {
}

export { init };