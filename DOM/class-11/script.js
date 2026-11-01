const input = document.querySelector("input");
const submitBtn = document.querySelector(".submitBtn");
const todos = document.querySelector(".todos");



submitBtn.addEventListener("click", () => {
    const value = input.value;

    if (value.trim() == "") return;

    const task = document.createElement("div");

    task.innerHTML = `
     <div class="task_1">
        <h3>${value}</h3>
        <div class="castomize">
            <button  class="editBtn">Edit</button>
            <button  class="dltBtn">Delete</button>
        </div>
    </div>
    `

    //! DELETE FEATURES 
    const dltBtn = task.querySelector(".dltBtn");
    dltBtn.addEventListener("click", () => {
        task.remove();
    });


    //! EDIT FEATURES 
    const editBtn = task.querySelector(".editBtn");
    editBtn.addEventListener("click", () => {
        const h3 = document.querySelector("h3");

        const newValue = prompt("Edit Task: ", h3.textContent);

        h3.textContent = newValue
    });


    



    todos.append(task);


})


