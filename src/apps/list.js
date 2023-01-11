const myLibrary = [];

class Todo {
  constructor(title, due_date) {
    this.title = title;
    this.due_date = due_date;
  }
}

// add to library lol
function addToLibrary(item) {
  myLibrary.push(item);
}

// Todo maker
const MakeNewTodo = (title, details, due) => {
  var todo = new Todo(title, details, due);

  return todo;
};

// Makes new entry and pushes it to library in one go
export const buildNewEntry = (title, details = "", due) => {
  var new_entry = MakeNewTodo(title, details, due);
  addToLibrary(new_entry);
};

const todo1 = new Todo("return some videotapes", "JAN 20th");
const todo2 = new Todo("invite coworker over", "JAN 20th");

addToLibrary(todo1);
addToLibrary(todo2);

export { myLibrary };
