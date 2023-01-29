import { buildElement } from "./element-builders";
import { format } from "date-fns";
import { addModalListener } from "./modals";
import { Todo, updateStorage } from "./libraries";
// import { myLibrary } from "./libraries";

const buildCard = (todo, iteration) => {
  const title = todo[0];

  // turn date into slash format because of weird js date bug that subtracts a day when dashes are used
  const rawDate = new Date(todo[1].replace(/-/g, "/"));
  const formattedDate = format(rawDate, "MMM do"); // display in Month/day format

  const card = buildElement("div", ["card"]);
  card.value = iteration;
  const check = buildElement("input", ["check"]);
  check.type = "checkbox";
  check.value = iteration;
  const title_box = buildElement("div", ["title"], title);
  const tools = buildElement("div", ["tools"]);
  const details = buildElement("img", ["details"]);
  details.value = iteration;
  details.setAttribute("data-modal-target", "#modal");
  const due_date_box = buildElement("div", ["due-date"], formattedDate);
  const edit = buildElement("img", ["edit"]);
  edit.value = iteration;
  edit.setAttribute("data-edit-target", "#modal-form");
  const trash = buildElement("img", ["trash"]);
  trash.value = iteration;

  tools.append(details, due_date_box, edit, trash);
  card.append(check, title_box, tools);

  return card;
};

export const buildList = (parent, libraryName) => {
  parent.innerHTML = "";

  const library = localStorage.getObj(libraryName);
  for (const item in library) {
    // use "item" key to number through items in library
    // BUT ALSO to number each card in oder to be called later
    parent.append(buildCard(library[item], item));
  }
  // add the listeners on each card button
  addCardListeners(parent, libraryName);
};

export const addCardListeners = (parent, library) => {
  addTrashListener(parent, library);
  addModalListener(library);
};

const addTrashListener = (parent, library) => {
  const bins = document.querySelectorAll(".trash");

  bins.forEach((bin) => {
    bin.addEventListener("click", (e) => {
      for (const item in library) {
        if (item == e.target.value) {
          removeItem(library, item, Todo[library][item]);
          // Todo[library].splice(item, 1);
          // updateStorage(library, Todo[library]);
          buildList(parent, library);
        }
      }
    });
  });
};

const removeItem = (library, id, todo) => {
  // remove item from current library
  Todo[library].splice(id, 1);
  updateStorage(library, Todo[library]);

  const libraries = ["myLibrary", "gym", "work", "study"];

  // go through each library name
  for (const i in libraries) {
    const name = libraries[i];

    // if not the same library as parameter library
    if (library != name) {
      const list = Todo[name];

      // Go through items in each library
      for (const item in list) {
        // if todo is found in current list
        if (todo == list[item]) {
          // remove it from list
          list.splice(item, 1);
          // update storage to reflect changes
          updateStorage(name, list);
        }
      }
    }
  }
};
