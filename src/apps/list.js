const myLibrary = [];

class Todo {
  #title;
  #description;
  #due_date;
  #project;
  #priority;

  constructor(
    title,
    due_date,
    description = "",
    project = " ",
    priority = " "
  ) {
    this.#title = title;
    this.#due_date = due_date;
    this.#description = description;
    this.#project = project;
    this.#priority = priority;
  }

  getTitle() {
    return this.#title;
  }

  getDueDate() {
    return this.#due_date;
  }

  getDescription() {
    return this.#description;
  }

  getProject() {
    return this.#project;
  }

  getPriority() {
    return this.#priority;
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
  "2023-01-02",
  "lets see Paul Allen's todo app",
  "work",
  "low"
);
const todo2 = new Todo(
  "make dinner reservations",
  "2023-02-23",
  "make sure everyone knows",
  "study",
  "medium"
);

addToLibrary(todo1);
addToLibrary(todo2);

export { myLibrary };
