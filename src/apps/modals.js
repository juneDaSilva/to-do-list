import { buildElement } from "./element-builder";
import { myLibrary } from "./list";

// --------- --------- DETAILS MODAL --------- ----------
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

// --- details modal functions ---

export const addInfoListener = () => {
  // SELECT ALL THE DETAILS BUTTONS THAT POINT TO THE MODAL ID
  const openModalButtons = document.querySelectorAll("[data-modal-target]");

  // ADD A LISTENER ON EACH ONE OF THEM THAT OPENS THE MODAL
  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const todo_num = button.value;
      console.log(todo_num);
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal, todo_num); // this function also starts the closer listeners
    });
  });
};

function openModal(modal, todo_num) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");

  populateInfoModal(todo_num);

  // add close listeners AFTER overlay has been loaded above or else you get an error
  addCloseListeners();
}

const addCloseListeners = () => {
  //  SELECT CLOSE BUTTON AND OVERLAY TO ADD A LISTENER TO
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  // ADD LISTENER TO OVERLAY THAT CLOSES MODAL
  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  // ADD LISTENER TO CLOSE BUTTON THAT CLOSES MODAL
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });
};

// ACTUAL CLOSE MODAL FUNCTION
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

const populateInfoModal = (todo_num) => {
  const todo = myLibrary[todo_num];
  const title = document.querySelector(".details-title");
  const description = document.querySelector(".details-description");
  const due = document.querySelector(".details-content.due");
  const project = document.querySelector(".details-content.project");
  const priority = document.querySelector(".details-content.priority");

  title.innerHTML = todo.getTitle();
  description.innerHTML = todo.getDescription();
  due.innerHTML = todo.getDueDate();
  project.innerHTML = todo.getProject();
  priority.innerHTML = todo.getPriority();
};

// function for writing html

// ----------- END DETAILS MODAL FUNCTIONS -------------

//  one way to grab information from library
const addDetailsListener = (library) => {
  const details = document.querySelectorAll(".details");

  details.forEach((detail) => {
    detail.addEventListener("click", (e) => {
      for (const item in library) {
        if (item == e.target.value) {
          console.log(library[item].getDetails());
          // TODO: function that opens pop-up with details
        }
      }
    });
  });
};
