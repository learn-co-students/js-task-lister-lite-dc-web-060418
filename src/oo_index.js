let taskList;
let Task;

document.addEventListener("DOMContentLoaded", () => {
  taskList = new TaskList();
  Task = createTask();

  document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault()
    new Task(document.getElementById('new-task-description').value);
    document.getElementById("create-task-form").reset()
    let displayList = document.getElementById('tasks')
    displayList.innerHTML = ""
    displayTasks();
  })

});

function makeListItemFromTask(task) {
  let taskElement = document.createElement("li")
  taskElement.innerHTML = task.description
  let displayList = document.getElementById('tasks')
  displayList.appendChild(taskElement)
};

function displayTasks() {
  for (let element of taskList.tasks) {
    makeListItemFromTask(element)
  }
};
