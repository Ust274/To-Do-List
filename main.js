const getInput = document.getElementById("add-task");
const lst = document.getElementById("list");




function addTask(event){


     event.preventDefault();

    if(getInput.value===""){
        console.error("you must write something");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = getInput.value;
        lst.appendChild(li);
        const rmb = document.createElement("button");
        rmb.textContent="x";
        rmb.onclick=() => lst.removeChild(li);
        li.appendChild(rmb)
        getInput.value="";
    }
}
