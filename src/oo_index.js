document.addEventListener("DOMContentLoaded", () => {
  createNewTask(document.getElementById("create-task-form"))
});

function createNewTask(node) {
  node.addEventListener("submit", function(e) {
    e.preventDefault()
    let task = document.getElementById("new-task-description")
    let taskList = document.getElementById("tasks")
    let newTask = document.createElement("li")
    newTask.innerText = task.value

    let deleteButton = document.createElement("BUTTON")
    deleteButton.innerText = "X"
    deleteButton.classList.add("delete")

    removeTaskFunctionality(deleteButton)

    newTask.appendChild(deleteButton)
    taskList.appendChild(newTask)
  })
}

function removeTaskFunctionality(node) {
  node.addEventListener("click", function(e) {
    console.log("hello")
    let task = node.parentElement
    let taskList = document.getElementById("tasks")

    taskList.removeChild(task)
  })
}
