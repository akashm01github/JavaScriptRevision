const bird = document.querySelector(".birdImage");

const game = document.querySelector('.game');

let birdTop = 100;

let gravity = 2;

setInterval(() => {
    birdTop += gravity;
    bird.style.top = birdTop + 'px'
}, 20);


document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        birdTop = birdTop - 60;
        console.log("hello")
    }
})


//! CREATE PIPE

function createPipe() {
    const pipeTop = document.createElement('div');
    const pipeBottom = document.createElement('div');

    pipeTop.className = 'pipe'
    pipeBottom.className = 'pipe'

    let gap = 150;

    let gameHeight = game.clientHeight;

    let maxHeight = gameHeight - gap - 70;

    let topPipeHeight = Math.random() * maxHeight + 50;

    let bottomPipeHeight = maxHeight - topPipeHeight - gap;


    pipeTop.style.height = topPipeHeight + "px";

    pipeBottom.style.height = bottomPipeHeight + "px";

    pipeTop.style.top = 0;

    pipeBottom.style.bottom = 0;

    game.append(pipeTop, pipeBottom)


    // Send the pipe to the Left Side

    let pipeLeft = game.clientHeight;

    pipeTop.style.left = pipeLeft + 'px';

    pipeBottom.style.left = pipeLeft + 'px';

    let move = setInterval(() => {
        pipeLeft = pipeLeft - 2

        pipeTop.style.left = pipeLeft + 'px';

        pipeBottom.style.left = pipeLeft + 'px';


        if (pipeLeft < -40) {
            pipeTop.remove();
            pipeBottom.remove();
            clearInterval(move)
        }


    }, 20);

}

setInterval(() => {
    createPipe();
}, 2000);
