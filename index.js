function addTask() {
    if (document.getElementsByClassName("input_task")[0].value == "") {
        alert("please fill the input field!")
    } else {
        const task = document.createElement("div");
        const val = document.querySelector(".input_task").value;
        const tasks = document.querySelector(".tasks");

        const input_el = document.createElement("input");
        input_el.value = val;
        input_el.className = "task_added";
        input_el.setAttribute("ReadOnly", "ReadOnly");

        task.className = "task";

        document.getElementsByClassName("input_task")[0].value = "";
        const edit_btn = document.createElement("button");
        edit_btn.innerHTML = '<i class="fa-solid fa-pen-to-square fa-2x"></i>';
        edit_btn.className= "edit_btn";

        const del_btn = document.createElement("button");
        del_btn.innerHTML = '<i class="fa-solid fa-trash-can fa-2x"></i>';
        del_btn.className='del_btn';

        task.appendChild(input_el);
        task.appendChild(edit_btn);
        task.appendChild(del_btn);


        tasks.appendChild(task);

        edit_btn.addEventListener('click', e => {
            if (edit_btn.innerHTML == '<i class="fa-solid fa-pen-to-square fa-2x"></i>') {
                input_el.removeAttribute("readonly");
                input_el.focus();
                edit_btn.innerHTML = '<i class="fa-solid fa-bookmark fa-2x"></i>';

                edit_btn.addEventListener('click', e => {
                    input_el.setAttribute("readonly", "readonly");
                    edit_btn.innerHTML = '<i class="fa-solid fa-pen-to-square fa-2x"></i>';
                })
            }
        })
        del_btn.addEventListener('click', e => {
            tasks.removeChild(task);
        })
    }


}
