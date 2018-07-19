//Execute index page view
let taskList;
let Task;
let displayList;
document.addEventListener("DOMContentLoaded", () => {
  taskList = new TaskList();
  Task = createTask();

  document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault()
    new Task(document.getElementById('new-task-description').value);
    document.getElementById("create-task-form").reset()
    displayList = document.getElementById('tasks')
    displayList.innerHTML = ""
    displayTasks();
  })

});

function makeListItemFromTask(task) {
  let taskElement = document.createElement("li")
  taskElement.innerHTML = task.description
  taskElement.id = task.id
  let displayList = document.getElementById('tasks')
  displayList.appendChild(taskElement)
  createDeleteButton(taskElement, task)
};

function displayTasks() {
  for (let element of taskList.tasks) {
    makeListItemFromTask(element)
  }
};

function deleteTaskByButtonId(event) {
    for (let element of taskList.tasks) {
        if (element.id === parseInt(event.target.id)) {
            let index = taskList.tasks.indexOf(element);
            taskList.tasks.splice(index, 1);
        }
    }
    displayList.innerHTML = ""
    displayTasks();
}

function createDeleteButton(node, task) {
  let btn = document.createElement("button")
  btn.innerHTML = "x"
  btn.id = task.id
  node.appendChild(btn)
  btn.addEventListener("click", deleteTaskByButtonId);
  
};