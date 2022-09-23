
/**Bài này em lười tạo đối tượng nên em làm theo dạng mảng luôn ạ */

let taskList = [];
let taskListComplete = [];

let getEle = (id) => {
  return document.getElementById(id);
};

getEle("addItem").onclick = () => {
  let task = getEle("newTask").value;
  if (task !== "") {
    taskList = [...taskList, task];
  }
  renderHTML();
  getEle("newTask").value = ""; 
};

let renderHTML = () => {
  let content = "";
  let contentComplete ="";
  for(let i = 0; i < taskList.length; i++){
    content += `
        <li>
            <div id="content">${taskList[i]}</div>
            <div>
                <i onclick="deleteTask(${i})" class="icon icon__delete fas fa-trash-alt" style="margin-right: 0.4rem; "></i>
                <i onclick="checkTask(${i})"class="icon icon__check far fa-check-circle"></i>
            </div>
        </li>
        `;
  };
  for(let i = 0; i < taskListComplete.length; i++){
    contentComplete += `
        <li>
            <div id="content">${taskListComplete[i]}</div>
            <div>
                <i onclick="deleteTaskComplete(${i})" class="icon icon__delete fas fa-trash-alt" style="margin-right: 0.4rem; "></i>
                <i class="icon icon__check far fa-check-circle" style="color: rgb(157, 250, 17)"></i>
            </div>
        </li>
        `;
  };
  getEle("todo").innerHTML = content;
  getEle("completed").innerHTML = contentComplete;
};

renderHTML();

let deleteTask = (id) => {
    taskList.splice(id, 1);
    renderHTML();
}
let deleteTaskComplete = (id) => {
    taskListComplete.splice(id, 1);
    renderHTML();
}

let checkTask = (id) => {
    taskListComplete = [...taskListComplete, taskList[id]];
    deleteTask(id);
    renderHTML();
}


document.getElementsByClassName("fa-sort-alpha-down")[0].onclick = () => {
    taskList = taskList.sort();
    renderHTML();
}
document.getElementsByClassName("fa-sort-alpha-up")[0].onclick = () => {
    taskList = taskList.sort();
    taskList = taskList.reverse();
    renderHTML();
}

