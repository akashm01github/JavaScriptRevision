const btn = document.querySelector(".btn");
const main = document.querySelector("main");

let colors = ["red", "blue", "yellow", "green"];

let index = 0;


//! OPTIMIZED 
btn.addEventListener('click', () => {
    main.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
    console.log(index);
})



//! NOT OPTIMIZED ()
// btn.addEventListener('click', () => {
//     if (index == 0) {
//         main.style.backgroundColor = colors[index];
//         index++;
//         console.log(index)
//     }
//     else if (index == 1) {
//         main.style.backgroundColor = colors[index];
//         index++;
//         console.log(index)
//     }
//     else if (index == 2) {
//         main.style.backgroundColor = colors[index];
//         index++;
//         console.log(index)
//     }
//     else if (index == 3) {
//         main.style.backgroundColor = colors[index];
//         index++;
//         console.log(index)
//     }
//     else{
//         main.style.backgroundColor = "white";
//         index = 0;
//         console.log(index)
//     }
// })



