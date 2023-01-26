import { buildElement } from "./element-builders";
import { buildList } from "./cards";
import { myLibrary } from "./list";

// ------------ ---- 1. HEADER NAV BUILDER ---- -----------
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

// ---------- ---- 2. MAIN BUILDER ---- -----------

export const buildMainContainer = () => {
  const main_container = buildElement("div", ["main-container"]);
  const main = buildElement("main", ["main"]);
  buildList(main, myLibrary);

  const overlay = buildElement("div");
  overlay.id = "side-overlay";
  main_container.append(main, overlay);

  return main_container;
};

// ------------ ---- 3. FOOTER BUILDER ---- ----------

export const buildFooter = () => {
  const footer = buildElement("footer");
  const par = buildElement("p", ["footer-par"], "--Built by JuneDev");

  // build github elements and connect them
  const gh_link = buildElement("a");
  const gh_img = buildElement("img", ["ghlogo", "logos"]);
  gh_link.href = "https://github.com/JuneDev-html";
  gh_link.append(gh_img);

  // build youtube elements and connect them
  const yt_link = buildElement("a");
  const yt_img = buildElement("img", ["ytlogo", "logos"]);
  yt_link.href = "https://www.youtube.com/channel/UC8ryMqGJPToOXdwj4IqwE-Q";
  yt_link.append(yt_img);

  par.append(gh_link, yt_link);
  footer.append(par);

  return footer;
};
