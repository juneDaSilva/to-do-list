import { buildElement } from "./element-builder";
import { format } from "date-fns";
import { addInfoListener } from "./modals";

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
  addInfoListener();
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
