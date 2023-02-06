import { buildList, removeItem } from "./cards";

export class Todo {
  #title;
  #description;
  #due_date;
  #project;
  #priority;

  static myLibrary = [];
  static gym = [];
  static work = [];
  static study = [];
  static projects = ["gym", "work", "study"];

  constructor(
    title,
    due_date = "2023-01-17",
    description = "",
    project,
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
        updateStorage(project, Todo[project]);
      }
    }
    Todo.myLibrary.push(this);
    updateStorage("myLibrary", Todo.myLibrary);
    // console.log(localStorage.getObj("myLibrary"));
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
    // only make change if
    //    new value isnt blank
    //    new value isnt the same as the old one
    if (value != "" && this.#project != value) {
      removeFromProjects(this.#project, this); // remove from old project list
      this.#project = value; // set new project
      Todo[value].push(this); // add item to new project list
    }
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

// Todo maker
export const MakeNewTodo = (title, due, details, project, priority) => {
  new Todo(title, due, details, project, priority);
};

// bundles functions to make new entry and to push it to library in one
export const buildNewEntry = (
  title = " ",
  due = "2023-02-01", // hardcoded just for example items purposes
  details = " ",
  project = " ",
  priority = " "
) => {
  MakeNewTodo(title, due, details, project, priority);
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
  // get current project for reference later
  const oldProject = todo.getProject();

  // update values
  todo.setTitle(title);
  todo.setDescription(description);
  todo.setDueDate(due);
  todo.setProject(project);
  todo.setPriority(priority);

  // update relevant localStorage libraries if project changed
  if (project != "" && project != oldProject) {
    updateStorage(project, Todo[project]);
  }
  updateStorage("myLibrary", Todo.myLibrary);
};

const removeFromProjects = (library, todo) => {
  const title = todo.getTitle();
  const list = Todo[library];

  // iterate through items in list
  for (const item in list) {
    // remove the item that matches reference
    if (list[item].getTitle() == title) {
      list.splice(item, 1);
    }
  }
  // update localStorage of to reflect changes
  updateStorage(library, list);
};

// -------------------------------------
// ------ Local Storage Related Functions ------
// -------------------------------------

// Stringifies arrays
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

// sets updated library as array into local storage
export const updateStorage = (libraryName, library) => {
  localStorage.setObj(libraryName, createLibrary(library));
};

// Turns library into a 2D array
const createLibrary = (library) => {
  const mainLibrary = []; // One outer array to hold many inner arrays

  // iterate through each object in a given library of objects
  for (const item in library) {
    const iteration = []; // Create a new array for each object

    // gather values from each object and put them all into an array as strings
    iteration.push(library[item].getTitle());
    iteration.push(library[item].getDueDate());
    iteration.push(library[item].getDescription());
    iteration.push(library[item].getProject());
    iteration.push(library[item].getPriority());

    // Add that array into the outer library array
    mainLibrary.push(iteration);
  }

  // return the library of arrays as one larger array
  return mainLibrary;
};

/*
 * ------------------------------------------------------------------
 * ------------------ Default todo items for testing ----------------
 * ------------------------------------------------------------------
 */

export const buildExamples = () => {
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
  buildNewEntry(
    "Make 'create object'",
    "2023-01-23",
    "Make a feature that can create new projects"
  );
  buildNewEntry(
    "'today/week' view",
    "2023-01-23",
    "Make feature that groups items by whether they are due today or this week"
  );
  buildNewEntry(
    "'check done' feature",
    "2023-01-23",
    "Make feature that grays out items or marks them as done without deleting them. maybe moving to a done folder?"
  );
  buildNewEntry(
    "'Sort' feature",
    "2023-01-23",
    "Sort item by date or priority option"
  );
  buildNewEntry(
    "Add priority colors",
    "2023-01-23",
    "Add a little tiny border on the left of a card with color coded priorities"
  );
};
