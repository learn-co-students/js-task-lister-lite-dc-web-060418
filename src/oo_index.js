
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  addFormHandler()
});


function addFormHandler(){
  document.getElementById("create-task-form").addEventListener("submit", function(event){
    event.preventDefault();
    let description = document.getElementById("new-task-description")
    let li = document.createElement('li')
    li.innerHTML += `${description.value} <button id ="${description.value}">X</button>`
    document.getElementById("tasks").appendChild(li)
    deleteFormHandler(document.getElementById(description.value), li)
  })
}

function deleteFormHandler(node, element){
  node.addEventListener("click", function(e){
    e.preventDefault()
    document.getElementById("tasks").removeChild(element)
  })
}