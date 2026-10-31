const input = document.querySelector("input");
const submitBtn = document.querySelector(".submitBtn");
const todos = document.querySelector(".todos");


submitBtn.addEventListener("click", () => {
    const value = input.value;

    if(value.trim() =="") return;

    const task = document.createElement("div");

    task.innerHTML = `
     <div class="task_1">
        <h3>${value}</h3>
        <div class="castomize">
            <button class="editBtn">Edit</button>
            <button class="dltBtn">Delete</button>
        </div>
    </div>
    `

    todos.append(task);
    

})