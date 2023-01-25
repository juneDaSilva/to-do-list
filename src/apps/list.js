const myLibrary = [];

export class Todo {
  #title;
  #description;
  #due_date;
  #project;
  #priority;

  static gym = [];
  static work = [];
  static study = [];
  static projects = ["gym", "work", "study"];

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

    // Push each new todo into corresponding project array
    for (const proj in Todo.projects) {
      if (Todo.projects[proj] == project) {
        Todo[project].push(this);
      }
    }
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
export const buildNewEntry = (
  title = " ",
  due = "2023-02-01", // hardcoded just for example items purposes
  details = " ",
  project = " ",
  priority = " "
) => {
  var new_entry = MakeNewTodo(title, due, details, project, priority);
  addToLibrary(new_entry);
};

// Takes existing todo iteration and updates property values
export const UpdateTodoItem = (
  library,
  todo_num,
  title,
  description,
  due,
  project,
  priority
) => {
  if (todo_num == null) return;
  const todo = library[todo_num];
  todo.setTitle(title);
  todo.setDescription(description);
  todo.setDueDate(due);
  todo.setProject(project);
  todo.setPriority(priority);
};

// Default todo items for testing

buildNewEntry(
  "return some videotapes",
  "2023-01-02",
  "lets see Paul Allen's todo app",
  "work",
  "low"
);
buildNewEntry(
  "make dinner reservations",
  "2023-02-23",
  "make sure everyone knows",
  "study",
  "medium"
);

buildNewEntry(
  "get pictures of spiderman",
  "2023-02-21",
  "he's a thief",
  "work",
  "high"
);

buildNewEntry(
  "soccer mommy concert",
  "2023-03-02",
  "remember to ask stephen to bring his bag",
  "study",
  "medium"
);
buildNewEntry(
  "water plants",
  "2023-01-23",
  "be a good plant daddy",
  "work",
  "high"
);
buildNewEntry("get rock climbing shoes");
buildNewEntry("develop film");
buildNewEntry("learn how to develop film at home");

export { myLibrary };
