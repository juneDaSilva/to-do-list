import { buildElement } from "./element-builder";

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
  const gym = buildElement("div", ["gym", "tab"], "-- GYM");
  const work = buildElement("div", ["work", "tab"], "-- WORK");
  const study = buildElement("div", ["study", "tab"], "-- STUDY");
  projects_block.append(projects, gym, work, study);

  sidebar.append(addNew, buildForm(), home_block, projects_block);

  return sidebar;
};

const buildForm = () => {
  const formContainer = buildElement("div", ["form-container-folded"]);
  const form = buildElement("form", ["form"]);
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
