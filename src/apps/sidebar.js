import { buildList } from "./cards";
import { buildElement } from "./element-builder";
import { myLibrary, Todo } from "./list";
import { loadHome } from "./page-loader";

export const buildSidebar = () => {
  const sidebar = buildElement("div", ["sidebar"]);
  const addNew = buildElement("img", ["add-new"]);
  addNew.alt = "add logo";
  const home_block = buildElement("div", ["side-block", "home-block"]);
  const home = buildElement("div", ["home"], "01. HOME");
  const today = buildElement("div", ["today", "tab"], "-- TODAY");
  const week = buildElement("div", ["week", "tab"], "-- WEEK");
  home_block.append(home, today, week);

  const projects_block = buildElement("div", ["side-block", "projects-block"]);
  const projects = buildElement("div", ["projects"], "02. PROJECTS");
  const gym = buildElement("div", ["gym", "tab", "sidebar-proj"], "-- GYM");
  const work = buildElement("div", ["work", "tab", "sidebar-proj"], "-- WORK");
  const study = buildElement(
    "div",
    ["study", "tab", "sidebar-proj"],
    "-- STUDY"
  );
  projects_block.append(projects, gym, work, study);

  sidebar.append(addNew, buildForm(), home_block, projects_block);

  return sidebar;
};

const buildForm = () => {
  const formContainer = buildElement("div", ["form-container-folded"]);
  const form = buildElement("form", ["sideform"]);
  form.action = "#";
  form.method = "post";

  const titleBlock = buildElement("div", [
    "titleBlock",
    "inputBlock",
    "textBlock",
  ]);
  const title = buildElement("input");
  title.type = "text";
  title.id = "title";
  title.name = "title";
  title.placeholder = "todo title";
  title.maxLength = "27";
  titleBlock.append(title);

  const detailsBlock = buildElement("div", [
    "detailsBlock",
    "inputBlock",
    "textBlock",
  ]);
  const details = buildElement("textarea");
  details.rows = "4";

  details.id = "details";
  details.name = "details";
  details.placeholder = "details";
  detailsBlock.append(details);

  const dateBlock = buildElement("div", [
    "dateBlock",
    "inputBlock",
    "textBlock",
  ]);
  const date = buildElement("input");
  date.type = "date";
  date.id = "due_date";
  date.name = "due_date";
  date.required = "true";
  dateBlock.append(date);

  const submitBlock = buildElement("div", ["submitBlock", "inputBlock"]);
  const submit = buildElement("button", ["submitButton"], "add note");
  submit.type = "#";
  submitBlock.append(submit);

  form.append(titleBlock, detailsBlock, dateBlock, submitBlock);
  formContainer.append(form);

  return formContainer;
};

// BUILD LISTENER THAT WAITS FOR CLICK ON PROJECTS (FOR EACH) LIKE THE
// FORMLISTEN AND LISTENSUBMIT FUNCTION ON ./FORM.JS
export const listenSidebar = () => {
  const content = document.querySelector("#content");
  const main = document.querySelector(".main");
  const projects = document.querySelectorAll(".sidebar-proj");
  const home = document.querySelector(".home");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const value = project.innerHTML.replace(/[^a-z]+/gi, "").toLowerCase();
      listProjectItems(main, value);
    });
  });

  home.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
    // buildList(main, myLibrary);
  });
};
// MAKE LISTENERS ON EACH PROJECT AND THEN ONCLICK MAKE THEM BUILD NEW LIST ACCORDINGLY
const listProjectItems = (main, value) => {
  for (const project in Todo.projects) {
    if (Todo.projects[project] == value) {
      buildList(main, Todo[value]);
    }
  }
};
