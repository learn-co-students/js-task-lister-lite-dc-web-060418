class TaskList {
    constructor(){
        this.node = document.querySelector('#tasks')
        this.Task = createTask()
    }

    addTask(description){
        const newTask = new this.Task(description)
        this.node.appendChild(newTask.render())
    }
}
