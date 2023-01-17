import { buildNewEntry, myLibrary } from "./list";
import { buildList as displayUpdatedList } from "./cards";
const addNew = document.querySelector(".add-new");
const formContainer = document.querySelector(".form-container-folded");
const form = document.querySelector(".form");

// Unfolds form via css
function toggleForm() {
  formContainer.classList.toggle("form-unfolded");
}

// Listens for submit button click
const listenSubmit = () => {
  form.addEventListener("submit", (event) => {
    const main = document.querySelector(".main");
    const title = document.getElementById("title");
    const details = document.getElementById("details");
    const due = document.getElementById("due_date");

    // make new item and put it into list
    buildNewEntry(title.value, due.value, details.value);
    displayUpdatedList(main, myLibrary);

    // clear form
    title.value = "";
    details.value = "";
    due.value = "";

    event.preventDefault();
  });
};

// make toggleForm and toggleArrow activate on button click
export const formListen = () => {
  addNew.addEventListener("click", () => {
    toggleForm();
    listenSubmit();
  });
};
