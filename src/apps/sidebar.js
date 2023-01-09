import { buildElement } from "./element-builder";

export const buildSidebar = () => {
  const sidebar = buildElement("div", ["sidebar"]);
  const home_block = buildElement("div", ["side-block", "home-block"]);
  const home = buildElement("div", ["home"], "01. HOME");
  const today = buildElement("div", ["today", "tab"], "-- TODAY");
  const week = buildElement("div", ["week", "tab"], "-- WEEK");
  home_block.append(home, today, week);

  const projects_block = buildElement("div"[("side-block", "projects-block")]);
  const projects = buildElement("div", ["projects"], "02. PROJECTS");
  const gym = buildElement("div", ["gym", "tab"], "-- GYM");
  const work = buildElement("div", ["work", "tab"], "-- WORK");
  const study = buildElement("div", ["study", "tab"], "-- STUDY");
  projects_block.append(projects, gym, work, study);

  sidebar.append(home_block, projects_block);

  return sidebar;
};
