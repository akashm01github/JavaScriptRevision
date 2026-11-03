const startBtn = document.querySelector(".startBtn");
const main = document.querySelector("main");
const timer = document.querySelector("#timer");
const overlay = document.querySelector(".overlay");
const score = document.querySelector("#score");

//! CREATE BOX 
const box = document.createElement("div");
box.classList.add("box");

let time = 0;
let result = 0;
let interval;


const randomColor = ()=>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}

const randomBox = () => {
    main.append(box);
    box.style.backgroundColor = randomColor();
    time += 1;
    timer.textContent = time;

    const mainH = main.clientHeight - box.offsetHeight;
    const mainW = main.clientWidth - box.offsetWidth;


    const rY = Math.random() * mainH;
    const rX = Math.random() * mainW;

    box.style.top = `${rY}px`
    box.style.left = `${rX}px`
}

startBtn.addEventListener("click", () => {
    clearInterval(interval);

    interval = setInterval(() => {
        randomBox()
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        overlay.style.display = "flex";
    }, 10000)

})

box.addEventListener("click",()=>{
    result +=1;
    score.textContent = result
})