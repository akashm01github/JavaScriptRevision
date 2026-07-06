const form = document.querySelector("form");
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const url = document.querySelector("#url");


const users = document.querySelector(".users");





let usersData = [
    {
        "id": 1,
        "name": "Aarav Sharma",
        "email": "aarav.sharma@example.com",
        "image": "https://randomuser.me/api/portraits/men/11.jpg",
        "dob": "1998-04-12"
    },
    {
        "id": 2,
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "image": "https://randomuser.me/api/portraits/women/22.jpg",
        "dob": "1995-11-28"
    },
    {
        "id": 3,
        "name": "Rohan Gupta",
        "email": "rohan.gupta@example.com",
        "image": "https://randomuser.me/api/portraits/men/33.jpg",
        "dob": "2000-07-15"
    },
    {
        "id": 4,
        "name": "Sneha Patel",
        "email": "sneha.patel@example.com",
        "image": "https://randomuser.me/api/portraits/women/44.jpg",
        "dob": "1997-01-09"
    },
    {
        "id": 5,
        "name": "Aditya Singh",
        "email": "aditya.singh@example.com",
        "image": "https://randomuser.me/api/portraits/men/55.jpg",
        "dob": "1999-09-21"
    }
]


const ui = () => {

    users.innerHTML = "";
    usersData.forEach((user,index) => {
        users.innerHTML += `
         <div class="userCard">
                <div class="image">
                    <img src=${user.image} alt="">
                </div>
                <h4>Name: ${user.name}</h4>
                <h4>Email: ${user.email}</h4>

                <div class="btn_container">
                    <button id="edit_btn">Edit</button>
                    <button onClick="deleteCard(${index})" id="dlt_btn">Delete</button>
                </div>
            </div>

    `
    })
}

ui();


form.addEventListener("submit", (events) => {
    events.preventDefault();


    let name = inp1.value;

    let email = inp2.value;

    let image = url.value

    if (name.trim() === "" && email.trim() === "") return;

    usersData.push({ name, email, image });

    ui();

    form.reset();
})


let deleteCard = (id)=>{
    usersData.splice(id,1);
    ui();
}





































// ----------------------------------------------------------------------------------

// const button = document.querySelector(".btn");
// const main = document.querySelector("main");
// const body = document.body;
// const div = document.querySelector("div");


//! EVENT CAPTERD

// button.addEventListener("click",()=>{
//     console.log("Button Fired....")
// },true);


// div.addEventListener("click",()=>{
//     console.log("This is Div")
// },true)


// main.addEventListener("click",()=>{
//     console.log("This is main")
// },true)

// body.addEventListener("click",()=>{
//     console.log("This is Body")
// },true)


