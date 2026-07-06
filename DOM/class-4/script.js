const main = document.querySelector("main");

// const box = document.querySelector(".box");

const btn = document.querySelector("button");

const timer = document.querySelector(".timer");

const scoreBoard = document.querySelector(".score");

const overlay = document.querySelector("#overlay");


let box = document.createElement("div");

box.classList.add("box");




let time = 0;
let interval;


const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`
}

const randomBox = () => {

    main.append(box);

    let mainHeight = main.clientHeight - box.offsetHeight;
    let mainWidth = main.clientWidth - box.offsetWidth;


    const ry = Math.random() * mainHeight;
    const rx = Math.random() * mainWidth;

    box.style.top = `${ry}px`;
    box.style.left = `${rx}px`;

    box.style.backgroundColor = randomColor();

}



btn.addEventListener("click", () => {

    clearInterval(interval);

    interval = setInterval(() => {
        time += 1;
        timer.textContent = time;
        randomBox()
    }, 1000);


    setTimeout(() => {
        clearInterval(interval);
        overlay.style.display = "flex"
    }, 10000);
})

let score = 0;

box.addEventListener("click",()=>{
    score +=1;

    scoreBoard.textContent = score
})























// setInterval(() => {
//     console.log("Hey...")
// }, 1000);


// setTimeout(() => {
//     console.log("I am Time Out......")
// }, 10000);


// const  a = Math.random()*10;

// const num = Math.floor(a);

// console.log(num)




































// const btnFive = document.querySelector("#five");

// const main = document.querySelector("main");

// btnFive.addEventListener("click",(event)=>{
//     console.log(event.target)
// })


// main.addEventListener("click",(event)=>{
//     console.log(event.target);
// })