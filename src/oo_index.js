
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  //Get taskForm elements
  const newTaskButton = document.querySelector('#task-submit')
  setTaskFormEventListener(newTaskButton, taskList)
});

function setTaskFormEventListener(newTaskButton, taskList) {
  const taskInput = document.querySelector('#new-task-description')
  newTaskButton.addEventListener('click',function (event) {
    event.preventDefault()
    event.stopPropagation()
    
    //Get input value, reset value
    const description = taskInput.value
    taskInput.value = ""

    //Create new task
    taskList.addTask(description)

  })
  
}


