const myLibrary = [];

class Todo {
  constructor(title, due_date) {
    this.title = title;
    this.due_date = due_date;
  }
}

function addItem(item) {
  myLibrary.push(item);
}

const todo1 = new Todo("return some videotapes", "JAN 20th");
const todo2 = new Todo("invite coworker over", "JAN 20th");

addItem(todo1);
addItem(todo2);

export { myLibrary };
