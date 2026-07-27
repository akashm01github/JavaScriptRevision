//! BIRD FALLEN
//! KEY PRESS TO GUMP

const game = document.querySelector(".game");
const bird = document.querySelector(".birdPng");

let birdTop = 80;

let gravity = 2;


setInterval(() => {
    birdTop += gravity;
    bird.style.top = birdTop+'px'
},20);