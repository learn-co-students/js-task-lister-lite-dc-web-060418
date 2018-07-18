
function createTask() {
  let TaskId = 0

  return class {

    constructor(description) {
      this.description = description;
      this.id = ++TaskId;
      taskList.tasks.push(this)
    }
  }

}
