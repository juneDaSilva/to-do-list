import { buildElement } from "./element-builder";
import { buildList } from "./cards";
import { myLibrary } from "./list";

export const buildMainContainer = () => {
  const main_container = buildElement("div", ["main-container"]);
  const main = buildElement("main", ["main"]);
  buildList(main, myLibrary);
  main_container.append(main);

  return main_container;
};
