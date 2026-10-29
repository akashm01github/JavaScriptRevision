const input = document.querySelector("input")
const taskContainer = document.querySelector(".taskContainer")
const btn = document.querySelector(".btn")




btn.addEventListener("click",()=>{
    const value = input.value;


    if(value.trim() == "") return


    taskContainer.innerHTML += `
      <div class="todos">
            <h3>${value}</h3>
            <div class="castomBtn">
                <button class="editBtn">Edit</button>
                <button class="dltBtn">Delete</button>
            </div>
        </div>
        `

        input.value = "";
})