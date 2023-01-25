import { buildList } from "./cards";
import { buildElement, buildFormElement } from "./element-builder";
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
  const gym = buildElement(
    "div",
    ["gym", "tab", "sidebar-proj"],
    "-- GYM",
    "gym"
  );
  const work = buildElement(
    "div",
    ["work", "tab", "sidebar-proj"],
    "-- WORK",
    "work"
  );
  const study = buildElement(
    "div",
    ["study", "tab", "sidebar-proj"],
    "-- STUDY",
    "study"
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
  buildFormElement(title, "title", "title", "text", "todo title");
  title.maxLength = "27";
  titleBlock.append(title);

  const detailsBlock = buildElement("div", [
    "detailsBlock",
    "inputBlock",
    "textBlock",
  ]);
  const details = buildElement("textarea");
  details.rows = "4";
  buildFormElement(details, "details", "details", null, "details");
  detailsBlock.append(details);

  const dateBlock = buildElement("div", [
    "dateBlock",
    "inputBlock",
    "textBlock",
  ]);
  const date = buildElement("input");
  buildFormElement(date, "due_date", "due_date", "date");
  date.required = "true";
  dateBlock.append(date);

  const projBlock = buildElement("div", ["inputBlock", "textBlock"]);
  const project = buildElement("select");
  buildFormElement(project, "side-project", "side-project");
  const proj1 = buildElement("option", null, "project");
  proj1.selected = true;
  proj1.disabled = true;
  const proj2 = buildElement("option", null, "gym", "gym");
  const proj3 = buildElement("option", null, "work", "work");
  const proj4 = buildElement("option", null, "study", "study");
  project.append(proj1, proj2, proj3, proj4);
  projBlock.append(project);

  const prioBlock = buildElement("div", ["inputBlock", "textBlock"]);
  const priority = buildElement("select");
  buildFormElement(priority, "side-priority", "side-priority");
  const prio1 = buildElement("option", null, "priority");
  prio1.selected = true;
  prio1.disabled = true;
  const prio2 = buildElement("option", null, "low", "low");
  const prio3 = buildElement("option", null, "medium", "medium");
  const prio4 = buildElement("option", null, "high", "high");
  priority.append(prio1, prio2, prio3, prio4);
  prioBlock.append(priority);

  const submitBlock = buildElement("div", ["submitBlock", "inputBlock"]);
  const submit = buildElement("button", ["submitButton"], "add note");
  submit.type = "#";
  submitBlock.append(submit);

  form.append(
    titleBlock,
    detailsBlock,
    dateBlock,
    projBlock,
    prioBlock,
    submitBlock
  );
  formContainer.append(form);

  return formContainer;
};

// listen for click on sidebar options and update display accordingly
export const listenSidebar = () => {
  const content = document.getElementById("content");
  const main = document.querySelector(".main");
  const projects = document.querySelectorAll(".sidebar-proj");
  const home = document.querySelector(".home");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const value = project.value;
      listProjectItems(main, value);
    });
  });

  home.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
  });
};

// build display list using only todo items in Todo.array of project clicked
const listProjectItems = (main, value) => {
  for (const project in Todo.projects) {
    if (Todo.projects[project] == value) {
      buildList(main, Todo[value]);
    }
  }
};
