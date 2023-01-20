import { buildElement } from "./element-builder";
import { format } from "date-fns";

const buildCard = (todo, iteration) => {
  const title = todo.getTitle();
  // turn date into slash format because of weird js date bug that subtracts a day when dashes are used
  const rawDate = new Date(todo.getDueDate().replace(/-/g, "/"));
  const formattedDate = format(rawDate, "MMM do"); // display in Month/day format

  const card = buildElement("div", ["card"]);
  card.value = iteration;
  const check = buildElement("div", ["check"]);
  check.value = iteration;
  const title_box = buildElement("div", ["title"], title);
  const tools = buildElement("div", ["tools"]);
  const details = buildElement("img", ["details"]);
  details.value = iteration;
  details.setAttribute("data-modal-target", "#modal");
  const due_date_box = buildElement("div", ["due-date"], formattedDate);
  const edit = buildElement("img", ["edit"]);
  edit.value = iteration;
  const trash = buildElement("img", ["trash"]);
  trash.value = iteration;

  tools.append(details, due_date_box, edit, trash);
  card.append(check, title_box, tools);

  return card;
};

export const buildList = (parent, library) => {
  parent.innerHTML = "";
  for (const item in library) {
    // use "item" key to number through items in library
    // BUT ALSO to number each card in oder to be called later
    parent.append(buildCard(library[item], item));
  }
  addCardListeners(parent, library);
};

export const addCardListeners = (parent, library) => {
  addTrashListener(parent, library);
  addDescriptionListener();
  addEditListener(library);
};

const addEditListener = (library) => {
  const edits = document.querySelectorAll(".edit");

  edits.forEach((edit) => {
    edit.addEventListener("click", (e) => {
      for (const item in library) {
        if (item == e.target.value) {
          console.log(library[item]);
        }
      }
    });
  });
};

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

const addTrashListener = (parent, library) => {
  const bins = document.querySelectorAll(".trash");

  bins.forEach((bin) => {
    bin.addEventListener("click", (e) => {
      for (const item in library) {
        if (item == e.target.value) {
          library.splice(item, 1);
          buildList(parent, library);
        }
      }
    });
  });
};

const addDescriptionListener = () => {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });
};

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
  addCloseListener();
}

const addCloseListener = () => {
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });
};

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
