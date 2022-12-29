window.addEventListener('load', function () {
    let form = document.querySelector("#task-form");
    let input = document.querySelector("#task-input");
    let list_element = document.querySelector("#tasks");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let task = input.value;

        if(!task){
            alert("Please fill out the task");
            return;
        }
        let task_element = document.createElement("div");
        task_element.classList.add("task");

        let task_content_element = document.createElement("div");
        task_content_element.classList.add("content");
    
        task_element.appendChild(task_content_element);

        let task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type = "text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly","readonly");

        task_content_element.appendChild(task_input_element);

        let task_actions_element = document.createElement("div");
        task_actions_element.classList.add("actions");

        let task_edit_element = document.createElement("button");
        task_edit_element.classList.add("edit");
        task_edit_element.innerText = "Edit";

        let task_delete_element = document.createElement("button");
        task_delete_element.classList.add("delete");
        task_delete_element.innerText = "Delete";

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_element.appendChild(task_actions_element);

        list_element.appendChild(task_element);

        input.value = "";

        task_edit_element.addEventListener('click',function(event){
            if(task_edit_element.innerText.toLowerCase() === "edit"){
                task_edit_element.innerText = "Save";
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
            } else{
                task_edit_element.innerText = "Edit";
                task_input_element.setAttribute("readonly","readonly");
            }
        });
        task_delete_element.addEventListener('click',function(event){
            list_element.removeChild(task_element);
        });
    })
})



