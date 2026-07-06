// const body = document.body;

// console.log(body.childNodes)
// console.log(body.children)


//! NodeList vs HTMLCollection 
// const mainDiv = document.querySelector(".main");

// console.log(mainDiv.childNodes)
// console.log(mainDiv.children)



//! CHANGING
// const h1 = document.querySelector("h1");

// //todo : change text use textContent 
// h1.textContent = "Updateed via DOM"


//! classList
// add, remove, contain, toggle, replace

// const h1 = document.querySelector("h1");

// const isClass = h1.classList.contains("heading");

// console.log(isClass)


const bulb = document.querySelector(".circle");

const btn = document.querySelector(".btn");

// let flag = true;

// btn.addEventListener("click",function(){
//     if(flag){
//         bulb.style.backgroundColor = "yellow";
//         btn.textContent = "Off";
//         flag=false
//     }
//     else{
//         bulb.style.backgroundColor = "transparent";
//         btn.textContent = "On";
//         flag=true
//     }
// })



btn.addEventListener("click",function(){
   if(bulb.classList.toggle("lightUp")){
         btn.textContent = "Off"
   }
   else{
    btn.textContent = "On"
   }
})

