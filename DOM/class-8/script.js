const bulb = document.querySelector(".bulb");
const btn = document.querySelector(".btn");



btn.addEventListener("click", () => {
    if (bulb.classList.toggle("lightUp")) {
        btn.textContent = "Off"
    }
    else {
        btn.textContent = "On"
    }
})


// let flag = false;


// btn.addEventListener("click", () => {
//     if (flag) {
//         bulb.style.backgroundColor = "yellow";
//         btn.textContent = "Off"
//         flag = false
//     }
//     else {
//         bulb.style.backgroundColor = "transparent";
//         btn.textContent = "On"
//         flag = true
//     }
// })