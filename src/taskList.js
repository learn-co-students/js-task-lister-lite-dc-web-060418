const tasks = [];
class TaskList {

  static create(text) {
    if ((typeof text === 'string') && (text.length > 0)) {
      /* Create new Task and add it to store */
      let task = new Task(text);
      tasks.push (task);

      /* Create <li> to represent the new task */
      let div = document.createElement("div");
      div.id = `task_div_${task.id}`;

      let btn = document.createElement("button");
      btn.addEventListener('click', function(e) {
        TaskList.destroy(task);
      });

      div.appendChild(document.createTextNode(task.text));
      div.appendChild(btn);

      let list = document.getElementById("tasks");
      list.appendChild(div);

      return true;
    }

    return false;
  }

  static destroy(task) {
    /* Remove from tasks */
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);

    /* Remove DOM element */
    let div = document.getElementById(`task_div_${task.id}`);
    document.getElementById("tasks").removeChild(div);
    return true;
  }
}
