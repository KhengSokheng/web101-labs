const tasks = [];

function addTask(){

    const input = document.getElementById("taskInput");

    const text = input.value.trim();

    if(text==="") return;

    tasks.push({
        name:text,
        done:false
    });

    input.value="";

    renderTasks();

}

function renderTasks(){

    const list=document.getElementById("taskList");

    list.innerHTML="";

    let completed=0;

    tasks.forEach((task,index)=>{

        if(task.done) completed++;

        list.innerHTML += `
            <li class="${task.done ? "done":""}">
                <p onclick="toggleTask(${index})">${task.name}</p>

                <span onclick="deleteTask(${index})">×</span>
            </li>
        `;
    });

    document.getElementById("status").innerHTML=
    `${completed} of ${tasks.length} tasks done`;

}

function toggleTask(index){

    tasks[index].done=!tasks[index].done;

    renderTasks();

}

function deleteTask(index){

    tasks.splice(index,1);

    renderTasks();

}