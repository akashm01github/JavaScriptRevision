const createbtn = document.querySelector("#createbtn");
const closeBtn = document.querySelector(".closeBtn");
const container = document.querySelector(".fromContainer");
const form = document.querySelector("form");
const productsDiv = document.querySelector(".products");


const productArr = [];

let updateIndex = null;

const ui = () => {
    productsDiv.innerHTML = "";
    productArr.forEach((product,index) => {
        productsDiv.innerHTML += `
         <div class="productCard">
                <div class="img">
                    <img src=${product.imageURL} alt="">
                </div>
                <div class="text">
                    <h3>${product.productName}</h3>
                    <p>${product.desc}</p>
                    <p>${product.price}</p>
                </div>

                <div class="btns">
                    <button onclick="updateProduct('${product.productName}')" class="updateBtn">Update</button>
                    <button onclick="deleteProduct('${index}')" class="deleteBtn">Delete</button>
                </div>
            </div>
        `
    })
}

createbtn.addEventListener("click", () => {
    container.style.display = "flex";
    console.log("Hello")
})


closeBtn.addEventListener("click", () => {
    container.style.display = "none"
})

console.log(productArr)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const productName = e.target[0].value;
    const desc = e.target[1].value;
    const price = e.target[2].value;
    const imageURL = e.target[3].value;

    if (productName === "" || desc === "" || price === "" || imageURL === "") return;

    const obj = { productName, desc, price, imageURL };


    if (updateIndex !== null) {
        productArr[updateIndex] = obj;
        updateIndex = null;
        container.style.display = "none";
    }
    else {
        productArr.push(obj);
    }

    ui()


    form.reset()

    container.style.display = "none";
})


const updateProduct = (name) => {
    container.style.display = "flex";
    const product = productArr.find((p) => p.productName === name);

    updateIndex = productArr.findIndex((p) => p.productName === name)

    form[0].value = product.productName;
    form[1].value = product.desc;
    form[2].value = product.price;
    form[3].value = product.imageURL;
}
const deleteProduct = (index) => {
    productArr.splice(index,1);
    ui();
}