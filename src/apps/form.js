import { buildNewEntry, myLibrary } from "./list";
import { addCardListeners, buildList as displayUpdatedList } from "./cards";

// Unfolds form via css
function toggleForm() {
  const formContainer = document.querySelector(".form-container-folded");

  formContainer.classList.toggle("form-unfolded");
}

// Listens for submit button click
const listenSubmit = () => {
  const form = document.querySelector(".sideform");

  form.addEventListener("submit", (event) => {
    const main = document.querySelector(".main");
    const title = document.getElementById("title");
    const details = document.getElementById("details");
    const due = document.getElementById("due_date");

    // make new item and put it into list
    buildNewEntry(title.value, due.value, details.value, null, null);
    displayUpdatedList(main, myLibrary);
    addCardListeners(main, myLibrary);

    // clear form
    title.value = "";
    details.value = "";
    due.value = "";

    event.preventDefault();
  });
};

// make toggleForm and toggleArrow activate on button click
export const formListen = () => {
  const addNew = document.querySelector(".add-new");

  addNew.addEventListener("click", () => {
    toggleForm();
    listenSubmit();
  });
};
