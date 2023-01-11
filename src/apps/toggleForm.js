const addNew = document.querySelector(".add-new");
const formContainer = document.querySelector(".form-container-folded");
const form = document.querySelector(".form");

// function to make form appear
function toggleForm() {
  formContainer.classList.toggle("form-unfolded");
}

const listenSubmit = () => {
  form.addEventListener("click", (event) => {
    const title = document.getElementById("title");
    const details = document.getElementById("details");
    const due = document.getElementById("due_date");

    // make new item

    // add item

    // build list function

    // clear form
    title.value = "";
    details.value = "";
    due.value = "";
    console.log("hi");

    event.preventDefault();
  });
};

// make toggleForm and toggleArrow activate on button click
export const formListen = () => {
  addNew.addEventListener("click", () => {
    toggleForm();

    listenSubmit();
    console.log("hello");
  });
};
