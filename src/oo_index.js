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

function createDeleteButton(node, task) {
  let btn = document.createElement("button")
  btn.innerHTML = "x"
  btn.id = task.id
  btn.addEventListener("click", function(event) {
    for (let element of taskList.tasks) {
      if (element.id === parseInt(btn.id))
      // taskList.tasks.splice(taskList.tasks.indexOf(element), 1)
      // delete taskList.tasks[btn.id - 1]
      taskList.tasks.splice(parseInt(btn.id) - 1, 1)
      displayList.innerHTML = ""
      displayTasks();
    }
  })

  node.appendChild(btn)

};
