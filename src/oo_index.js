
document.addEventListener("DOMContentLoaded", () => {
  createNewTask(getSubmitButton());
});

function createNewTask(node) {
    node.addEventListener('click', function(event) {
      event.preventDefault();
      let li = document.createElement('li');
      li.innerText = getUserInput()
      getTaskList().appendChild(li);
    })
}



function getSubmitButton() {
  return document.querySelector('#create-task-form').children[2]
}

function getTaskList() {
  return document.getElementById('tasks');
}

function getUserInput() {
    return document.getElementById('new-task-description').value;
}
