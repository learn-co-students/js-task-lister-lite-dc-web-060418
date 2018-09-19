let taskId = 0;
class Task {

  constructor(text) {
    this.id = ++taskId;
    this.text = text;
  }

}
