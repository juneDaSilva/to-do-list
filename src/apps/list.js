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

  setTitle(value) {
    this.#title = value;
  }

  getDueDate() {
    return this.#due_date;
  }

  setDueDate(value) {
    this.#due_date = value;
  }

  getDescription() {
    return this.#description;
  }

  setDescription(value) {
    this.#description = value;
  }

  getProject() {
    return this.#project;
  }

  setProject(value) {
    this.#project = value;
  }

  getPriority() {
    return this.#priority;
  }

  setPriority(value) {
    this.#priority = value;
  }
}

// ----------------------------
// ------ LIST FUNCTIONS ------

// add to library
function addToLibrary(item) {
  myLibrary.push(item);
}

// Todo maker
const MakeNewTodo = (title, due, details, project, priority) => {
  var todo = new Todo(title, due, details, project, priority);
  return todo;
};

// bundles functions to make new entry and to push it to library in one
export const buildNewEntry = (title, due, details, project, priority) => {
  var new_entry = MakeNewTodo(title, due, details, project, priority);
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

// Takes existing todo iteration and updates property values
export const UpdateTodoItem = (
  todo_num,
  title,
  description,
  due,
  project,
  priority
) => {
  if (todo_num == null) return;
  const todo = myLibrary[todo_num];
  console.log(`-----${priority}`);
  todo.setTitle(title);
  todo.setDescription(description);
  todo.setDueDate(due);
  todo.setProject(project);
  todo.setPriority(priority);
};

addToLibrary(todo1);
addToLibrary(todo2);

export { myLibrary };
