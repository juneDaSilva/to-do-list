import { buildElement } from "./element-builder";

export const buildHiddenNav = () => {
  const nav = buildElement("nav", ["hidden-nav"]);
  const burger = buildElement("div", ["burger-menu"]);
  burger.id = "burger-menu";
  const fa1 = buildElement("div", ["fa", "fa-bars"]);
  const fa2 = buildElement("div", ["fa", "fa-bars"]);
  const fa3 = buildElement("div", ["fa", "fa-bars"]);
  const logo = buildElement("div", ["header-logo"], "task bee");
  const icon = buildElement("img", ["bee-logo"]);

  burger.append(fa1, fa2, fa3);
  nav.append(burger, logo, icon);

  return nav;
};

export const buildHeader = () => {
  const header = buildElement("header");
  const logo = buildElement("div", ["header-logo"], "task bee");
  const icon = buildElement("img", ["bee-logo"]);

  header.append(logo, icon);

  return header;
};
