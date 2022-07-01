function addTask(){

    const task = document.createElement("div");
    const val = document.querySelector(".input_task").value;
    const tasks = document.querySelector(".tasks");

    const input_el = document.createElement("input");
    input_el.value = val;
    input_el.className = "task_added";
    input_el.setAttribute("ReadOnly", "ReadOnly");

    document.getElementsByClassName("input_task")[0].value = " ";
    const edit_btn = document.createElement("button");
    edit_btn.innerHTML = "Edit";

    const del_btn = document.createElement("button");
    del_btn.innerHTML = "delete";

    task.appendChild(edit_btn);
    task.appendChild(del_btn);

    task.appendChild(input_el);
    tasks.appendChild(task);

    edit_btn.addEventListener('click', e=>{
        if(edit_btn.innerHTML == "Edit"){
            input_el.removeAttribute("readonly");
            input_el.focus();
            edit_btn.innerHTML = "Save";

            edit_btn.addEventListener('click', e=>{
                input_el.setAttribute("readonly", "readonly");
                edit_btn.innerHTML = "Edit";
            })
        }
    })
    del_btn.addEventListener('click', e=>{
        tasks.removeChild(task);
    })
    
    
}