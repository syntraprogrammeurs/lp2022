/*variabelen declareren*/
let taskform = document.querySelector("#new_task_form");
let tasklist = document.querySelector("#tasklist");
let tasklistdelete = document.querySelector("#clear");
/*uitschakelen van de standaard gedraging van de button*/
taskform.addEventListener("submit",function(e){
    e.preventDefault();
    /*ophalen taak: de VOLLEDIGE tag met zijn inhoud*/
    let newTaskInputValue = taskform.elements.new_task;
    /* Enkel de inhoud, nl. ingetikte waarde door de gebruiker wordt
    * overgedragen aan de functie addTask*/
    addTask(newTaskInputValue.value);
    /*clearen van input*/
    newTaskInputValue.value = "";
});

/*Doel: overdragen van iedere taak aan de sectie tasklist*/
function addTask(newTask){
    /* opbouw van de tag */
    const div = document.createElement("div");
    div.classList.add("mb-2","d-flex", "align-items-center");
    const trash = document.createElement("button");
    trash.classList.add("btn","btn-danger", "me-1");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input","m-0");
    const label = document.createElement("label");
    label.classList.add("ms-2");
    /* toevoegen van de waarden van de button en en de ingevulde taak van de gebruiker*/
    trash.innerHTML = "DEL";
    label.innerText = newTask;
    /* in volgorde de elementen toevoegen*/
    div.appendChild(trash);
    div.appendChild(checkbox);
    div.appendChild(label);
    /* toevoegen van de volledige div tag aan de tasklist*/
    tasklist.appendChild(div);

    /*alert taak toegevoegd*/


    /*EVENT LISTENER aan DIV toevoegen*/
    trash.addEventListener("click",function(){
        div.remove();
    });
    /*taak werd uitgevoerd: doorstrepen*/
    checkbox.addEventListener("click", function(){
        if(checkbox.checked === true){
            label.style.textDecoration = "line-through";
        } else{
            label.style.textDecoration = "none";
        }
    });
}
tasklistdelete.addEventListener("click", function(){
    tasklist.innerHTML="";
});
