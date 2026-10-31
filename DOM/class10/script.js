
const container = document.querySelector(".container");


const box_1= document.createElement("div");
const box_2= document.createElement("div");
const box_3= document.createElement("div");

box_1.textContent = "1"
box_2.textContent = "2"
box_3.textContent = "3"

box_1.classList.add("box_1")
box_2.classList.add("box_2")
box_3.classList.add("box_3")

container.append(box_1,box_2)


container.before(box_2)

container.prepend(box_2,box_1)


container.replaceChild(box_3, box_2)

box_2.replaceWith(box_3)






// const container = document.querySelector(".container");


// const box_1= document.querySelector(".box_1");
// const box_2= document.querySelector(".box_2");
// const box_3= document.querySelector(".box_3");

// container.insertBefore(box_2,box_1)



// -----------------------------------------------------------


// const card = document.querySelector("#card");


// const span = document.createElement("span");

// span.textContent = "This is Span - 2";


// card.appendChild(span);




// const card = document.querySelector("#card");

// console.log(card.dataset.userId);

// card.dataset.userId = "99"

// console.log(card.dataset.userId);


// --------------------------------------------------------


// const heading1 = document.querySelector(".heading1");

// heading1.setAttribute("myName", "Akash");

// const res= heading1.getAttribute("myName")

// heading1.removeAttribute("myName");

// const a = heading1.hasAttribute("myName")

// console.log(a)

// console.log(res)
