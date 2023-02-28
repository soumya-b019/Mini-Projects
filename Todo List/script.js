const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
if(list){
    list.forEach(task=>{
        toDoList(task)
    });
}

formEl.addEventListener("submit", (event)=>{
    // to avoid page to reload
    event.preventDefault();
    toDoList();
});

function toDoList(task){
    // add the task i.e. li
    let newTask = inputEl.value;
    if(task){
        newTask = task.name;
    }

    const liEl = document.createElement("li");
    if(task && task.checked){
        liEl.classList.add("checked");
    }
    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    // after adding task we need to clear the input 
    inputEl.value = "";

    // to add check button in the li
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    liEl.appendChild(checkBtnEl);

    // to add trash button in the li
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`
    liEl.appendChild(trashBtnEl);

    // adding event listeners to the buttons
    // here, we have used toggle taki hum check uncheck kr pae
    checkBtnEl.addEventListener("click", ()=>{
        liEl.classList.toggle("checked");
        // updating the local storage after check
        updateLocalStorage();
    })
    
    // here, once we click on the trash that div will be removed
    trashBtnEl.addEventListener("click", ()=>{
        liEl.remove();
        // updating the local storage after remove
        updateLocalStorage();
    })
    // updating the local storage
    updateLocalStorage();
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li");
    list = [];
    liEls.forEach((liEl) => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked"),
        });
    });
    localStorage.setItem("list", JSON.stringify(list));
}
