import { buildElement, buildFormElement } from "./element-builders";
import { UpdateTodoItem } from "./list";
import { buildList as displayUpdatedList } from "./cards";

// ---------- ----- 1. MODAL BUILDERS ----- -----------

// ---- 1. Details Modal ----
export const buildDetailsModal = () => {
  const mod_container = buildElement("div", ["modal-container"]);
  const modal = buildElement("div", ["modal"]);
  modal.id = "modal";

  const mod_head = buildElement("div", ["modal-header"]);
  const title = buildElement("div", ["details-title"], "Title");
  const cls_button = buildElement("img", ["close-button"]);
  cls_button.setAttribute("data-close-button", "");
  mod_head.append(title, cls_button);

  const mod_bod = buildElement("div", ["modal-body"]);
  const description = buildElement(
    "div",
    ["details-description"],
    "Description"
  );

  const dp_row = buildElement("div", ["date-project-row"]);
  const deet_bund1 = buildElement("div", ["details-bundle"]);
  const due = buildElement("div", ["details-label"], "Due:");
  const due_cont = buildElement("div", ["details-content", "due"]);
  deet_bund1.append(due, due_cont);

  const deet_bund2 = buildElement("div", ["details-bundle"]);
  const proj = buildElement("div", ["details-label"], "Project:");
  const proj_cont = buildElement("div", ["details-content", "project"], "gym");
  deet_bund2.append(proj, proj_cont);
  dp_row.append(deet_bund1, deet_bund2);

  const deet_bund3 = buildElement("div", ["details-bundle"]);
  const prior = buildElement("div", ["details-label"], "Priority:");
  const prior_cont = buildElement(
    "div",
    ["details-content", "priority"],
    "high"
  );

  const overlay = buildElement("div");
  overlay.id = "overlay";

  deet_bund3.append(prior, prior_cont);
  mod_bod.append(description, dp_row, deet_bund3);
  modal.append(mod_head, mod_bod);
  mod_container.append(modal, overlay);

  return mod_container;
};

// --- 1. Edit Modal ----

export const buildEditModal = () => {
  const mod_container = buildElement("div", ["modal-container"]);
  const modal = buildElement("form", ["modal", "form"]);
  modal.id = "modal-form";
  modal.method = "post";

  const header = buildElement("div", ["modal-header"]);
  const title = buildElement("input", ["edit-title"]);
  buildFormElement(title, "edit-title", "edit-title", "text", "Title");
  title.maxLength = "27";
  const cls_button = buildElement("img", ["close-button"]);
  cls_button.setAttribute("data-close-button", "");
  header.append(title, cls_button);

  const body = buildElement("div", ["modal-body"]);

  const description = buildElement("textarea", ["edit-description"]);
  buildFormElement(
    description,
    "edit-description",
    "edit-description",
    null,
    "Description"
  );

  const bund1 = buildElement("div", ["details-bundle"]);
  const due = buildElement("div", ["edit-label"], "Due:");
  const due_cont = buildElement("input", [
    "details-content",
    "due",
    "edit-due",
  ]);
  buildFormElement(due_cont, "edit-due-date", "edit-due-date", "date");
  bund1.append(due, due_cont);

  const bund2 = buildElement("div", ["details-bundle"]);
  const proj = buildElement("div", ["edit-label"], "Project:");
  const proj_cont = buildElement("select", ["details-content", "project"]);
  buildFormElement(proj_cont, "edit-project", "edit-project");
  const proj1 = buildElement("option", ["proj-option"], "gym");
  proj1.selected = true;
  const proj2 = buildElement("option", ["proj-option"], "work");
  const proj3 = buildElement("option", ["proj-option"], "study");
  proj_cont.append(proj1, proj2, proj3);
  bund2.append(proj, proj_cont);

  const row = buildElement("div", ["date-project-row"]);
  const bund3 = buildElement("div", ["details-bundle"]);
  const prio = buildElement("div", ["edit-label"], "Priority:");
  const prio_cont = buildElement("select", ["details-content", "priority"]);
  buildFormElement(prio_cont, "edit-priority", "edit-priority");
  const prio1 = buildElement("option", ["prio-option"], "low");
  prio1.selected = true;
  const prio2 = buildElement("option", ["prio-option"], "medium");
  const prio3 = buildElement("option", ["prio-option"], "high");
  prio_cont.append(prio1, prio2, prio3);
  bund3.append(prio, prio_cont);

  const button = buildElement(
    "button",
    ["submitButton", "editButton"],
    "submit edit"
  );
  button.type = "#";

  row.append(bund3, button);

  const overlay = buildElement("div");
  overlay.id = "edit-overlay";

  body.append(description, bund1, bund2, row);
  modal.append(header, body);
  mod_container.append(modal, overlay);

  return mod_container;
};

// ------------------
// 2. MODAL FUNCTIONS
// ------------------
// --------------- 2. OPEN AND CLOSE FUNCTIONS ----------

export const addModalListener = (library) => {
  // SELECT ALL THE DETAILS BUTTONS THAT POINT TO THE MODAL ID
  const InfoModalButtons = document.querySelectorAll("[data-modal-target]");
  const EditModalButtons = document.querySelectorAll("[data-edit-target]");

  InfoModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(library, modal, button.value); // this function also starts the closer listeners
    });
  });

  EditModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.editTarget);
      openModal(library, modal, button.value);
    });
  });
};

function openModal(library, modal, todo_num) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");

  // Filter which modal is being called and populate it accordingly
  if (modal.id == "modal") {
    populateInfoModal(library, todo_num);
  } else if (modal.id == "modal-form") {
    populateEditModal(library, todo_num);
    listenSubmit(library, todo_num);
  }

  addCloseListeners(); // add close listeners AFTER overlay has been loaded above or else you get an error
}

const addCloseListeners = () => {
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  // Add listener to overlay
  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  // Add listener to close button
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });
};

// Close modal by removing "active" class
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// --------------- ----- 2. MODAL POPULATION ----- -------------
// Populate Info Modal
const populateInfoModal = (library, todo_num) => {
  const todo = library[todo_num];
  document.querySelector(".details-title").innerHTML = todo.getTitle();
  document.querySelector(".details-description").innerHTML =
    todo.getDescription();
  document.querySelector(".details-content.due").innerHTML = todo.getDueDate();
  document.querySelector(".details-content.project").innerHTML =
    todo.getProject();
  document.querySelector(".details-content.priority").innerHTML =
    todo.getPriority();
};

// Populate Edit modal
const populateEditModal = (library, todo_num) => {
  const todo = library[todo_num];
  document.querySelector(".edit-title").value = todo.getTitle();
  document.querySelector(".edit-description").value = todo.getDescription();
  document.querySelector(".edit-due").value = todo.getDueDate();

  // load previously selected project
  const projOptions = document.querySelectorAll(".proj-option");
  projOptions.forEach((proj) => {
    if (proj.innerHTML == todo.getProject()) {
      proj.selected = true;
    }
  });

  // load previously selected priority
  const prioOptions = document.querySelectorAll(".prio-option");
  prioOptions.forEach((prio) => {
    if (prio.innerHTML == todo.getPriority()) {
      prio.selected = true;
    }
  });
};

//  -------------- --- 2. SUBMIT MODAL INFORMATION ---- ----------
const listenSubmit = (library, todo_num) => {
  const form = document.querySelector("#modal-form");

  form.addEventListener("submit", (event) => {
    if (todo_num == null) return;
    const main = document.querySelector(".main");
    const title = document.getElementById("edit-title");
    const description = document.getElementById("edit-description");
    const due = document.getElementById("edit-due-date");
    const proj = document.getElementById("edit-project");
    const prio = document.getElementById("edit-priority");

    // taken from ./list
    UpdateTodoItem(
      library,
      todo_num,
      title.value,
      description.value,
      due.value,
      proj.value,
      prio.value
    );

    // Grab the modal that should be closed and run the close function on it
    const modal = form.closest(".modal");
    closeModal(modal);

    // update display and add new listeners
    displayUpdatedList(main, library);
    // addCardListeners(main, myLibrary);
    todo_num = null; // make null because it keeps saving value from previous click?

    event.preventDefault();
  });
};
