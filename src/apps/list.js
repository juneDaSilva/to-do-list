const myLibrary = [];

class Todo {
  #title;
  #details;
  #due_date;

  constructor(title, due_date, details) {
    this.#title = title;
    this.#due_date = due_date;
    this.#details = details;
  }

  getTitle() {
    return this.#title;
  }

  getDueDate() {
    return this.#due_date;
  }

  getDetails() {
    return this.#details;
  }
}

// ----------------------------
// ------ LIST FUNCTIONS ------

// add to library
function addToLibrary(item) {
  myLibrary.push(item);
}

// Todo maker
const MakeNewTodo = (title, due, details) => {
  var todo = new Todo(title, due, details);
  return todo;
};

// bundles functions to make new entry and to push it to library in one
export const buildNewEntry = (title, due, details) => {
  var new_entry = MakeNewTodo(title, due, details);
  addToLibrary(new_entry);
};

const todo1 = new Todo(
  "return some videotapes",
  "2023/01/02",
  "lets see Paul Allen's todo app"
);
const todo2 = new Todo(
  "make dinner reservations",
  "2023/01/02",
  "make sure everyone knows"
);

addToLibrary(todo1);
addToLibrary(todo2);

export { myLibrary };
