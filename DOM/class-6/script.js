const closeBtn = document.querySelector("#close");
const overlay = document.querySelector(".overlay");
const createBtn = document.querySelector(".createBtn");
const form = document.querySelector("form");

const productsDiv = document.querySelector(".products");


createBtn.addEventListener("click", () => {
    overlay.style.display = "flex"
})

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none"
})


let productsArr = JSON.parse(localStorage.getItem("products")) || [];
let updateIndex = null;



const ui = () => {
    productsDiv.innerHTML = "";
    productsArr.forEach((product, index) => {
        productsDiv.innerHTML += ` <div class="productCard">
                <div class="imageContainer">
                    <img class="imageBox" src="${product.image}" alt="">
                </div>
                <h4>${product.productName}</h4>
                <p>${product.desc}</p>
                <p>₹${product.price}</p>
                <div class="castom">
                    <button onClick="updateProduct('${product.productName}')" id="editBtn">Edit</button>
                    <button onClick="deleteProduct(${index})" id="deltBtn">Delete</button>
                </div>
            </div>`
    })
}

ui()


form.addEventListener("submit", (event) => {
    event.preventDefault();
    overlay.style.display = "none"
    const productName = event.target[0].value;
    const desc = event.target[1].value;
    const price = event.target[2].value;
    const image = event.target[3].value;


    const productDetails = {
        productName,
        desc,
        price,
        image
    }

    if (updateIndex != null) {
        productsArr[updateIndex] = productDetails;
        updateIndex = null;
        localStorage.setItem("products",JSON.stringify(productsArr));
    }
    else {
        productsArr.push(productDetails);
        localStorage.setItem("products",JSON.stringify(productsArr));
    }


    ui()

    console.log(productsArr)

    form.reset();
})



const updateProduct = (name) => {
    console.log(name)
    overlay.style.display = "flex";
    let product = productsArr.find((elem) => elem.productName === name);

    updateIndex = productsArr.findIndex((elem) => elem.productName === name);

    form[0].value = product.productName;
    form[1].value = product.desc;
    form[2].value = product.price;
    form[3].value = product.image;
}

const deleteProduct = (index) => {
    productsArr.splice(index, 1);
    localStorage.setItem("products",JSON.stringify(productsArr));
    ui();
}


