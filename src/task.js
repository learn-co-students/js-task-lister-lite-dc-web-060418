function createTask(){
    let TaskId = 0
    return class {
        constructor(description){
            this.description = description
            this.id = ++TaskId
        }
        render(){
            const task = document.createElement('li')
            task.id = this.id
            task.innerText = this.description

            const deleteButton = document.createElement('button')
            deleteButton.innerText = "x"
            deleteButton.addEventListener('click', this.removeItem)

            task.appendChild(deleteButton)

            return task
        }

        removeItem(event){
            const clickedTask = event.target.parentElement
            clickedTask.remove()
        }
    }
}
