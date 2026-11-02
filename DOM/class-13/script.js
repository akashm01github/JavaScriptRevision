const form = document.querySelector("form");
const input = document.querySelector("input");
const userName = document.querySelector(".userName");
const userEmail = document.querySelector(".userEmail");
const imageURL = document.querySelector(".imageURL");
const users = document.querySelector(".users");



const usersData = [
    {
        "id": 1,
        "name": "Arjun Sharma",
        "email": "arjun.sharma@example.com",
        "imageurl": "https://i.pravatar.cc/150?img=12",
        "dob": "1998-04-15"
    },
    {
        "id": 2,
        "name": "Priya Sen",
        "email": "priya.sen@example.com",
        "imageurl": "https://i.pravatar.cc/150?img=47",
        "dob": "2001-09-22"
    },
    {
        "id": 3,
        "name": "Rahul Das",
        "email": "rahul.das@example.com",
        "imageurl": "https://i.pravatar.cc/150?img=33",
        "dob": "1997-12-08"
    },
    {
        "id": 4,
        "name": "Sneha Roy",
        "email": "sneha.roy@example.com",
        "imageurl": "https://i.pravatar.cc/150?img=44",
        "dob": "2000-06-19"
    },
    {
        "id": 5,
        "name": "Vikram Gupta",
        "email": "vikram.gupta@example.com",
        "imageurl": "https://i.pravatar.cc/150?img=68",
        "dob": "1999-02-27"
    }
]


const ui = () => {
    users.innerHTML = "";
    usersData.forEach((user,index) => {
        users.innerHTML += `
          <div class="userCard">
                <div class="imgCintainer">
                    <img src=${user.imageurl} alt="">
                </div>
                <h3>${user.name}</h3>
                <p>${user.email}</p>

                <div class="ctaContainer">
                    <button class="editBtn">Edit</button>
                    <button onclick="deleteCard(${index})" class="dltBtn">Delete</button>
                </div>

            </div>
    `
    })
}

ui()

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = userName.value;
    const email = userEmail.value;
    const imageurl = imageURL.value;

    if (name.trim() == "" || email.trim() == "" || imageurl.trim() == "") return;

    usersData.push({ name, email, imageurl })
    
    ui()

    console.log({ name, email, imageurl });

    form.reset()
})





const deleteCard = (id)=>{
    usersData.splice(id,1)

    ui()
}











// const body = document.body;
// const grandParent = document.querySelector(".grandParent");
// const parent = document.querySelector(".parent");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//     console.log("Button Triggried........");
// });
// parent.addEventListener("click", () => {
//     console.log("Parent Triggried........");
// });
// grandParent.addEventListener("click", () => {
//     console.log("GrandParent Triggried........");
// });
// body.addEventListener("click", () => {
//     console.log("Body Triggried........");
// });


