const main = document.querySelector("main");
// const box = document.querySelector(".box");
const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const scoreBoard = document.querySelector("#scoreBoard");
const box = document.createElement("div");

const overlay = document.querySelector(".overlay");

const closeBtn = document.querySelector(".closeBtn");

box.classList.add("box");


let time = 0;
let interval;
let score = 0;
let timeout;
let isClicked = false;

const randomColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`;
}

const randomBox = () => {


    main.append(box);

    let mainH = main.clientHeight - box.offsetHeight;

    let mainW = main.clientWidth - box.offsetWidth;

    const rx = Math.floor(Math.random() * mainW);
    const ry = Math.floor(Math.random() * mainH);

    box.style.top = `${ry}px`
    box.style.left = `${rx}px`

    box.style.backgroundColor = randomColor();

    isClicked = false;
    box.classList.remove("disabled");
}


btn.addEventListener("click", () => {
    clearInterval(interval);


    randomBox();


    interval = setInterval(() => {

        randomBox();

        time += 1;
        timer.textContent = time;


    }, 1000);


    timeout = setTimeout(() => {
        clearInterval(interval)
        overlay.style.display = "flex";
    }, 10000);
})


box.addEventListener("click", () => {
    if (isClicked) return;
    isClicked = true;
    box.classList.add("disabled")
    score += 1;
    scoreBoard.textContent = score;

})


closeBtn.addEventListener("click", () => {
    overlay.style.display = "none"
    score = 0;
    scoreBoard.textContent = score;
    time = 0;
    timer.textContent = time;
    main.innerHTML = ""
    clearInterval(interval);
})